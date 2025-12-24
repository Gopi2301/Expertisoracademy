<?php
/**
 * Zoho Form Submission API
 * Handles all CMS form submissions and forwards to Zoho Forms & CRM
 */

require_once '../config.php';
require_once './config.php';

// Enable detailed error logging
error_reporting(E_ALL);
ini_set('display_errors', 0);
ini_set('log_errors', 1);

/**
 * Main form submission handler
 */
function submitToZoho()
{
    $requestBody = getRequestBody();

    // Log incoming request
    logToConsole('Form Submission Request', $requestBody);

    // Validate required fields
    $validation = validateFormData($requestBody);
    if (!$validation['valid']) {
        logToConsole('Validation Failed', $validation['errors']);
        sendError(implode(', ', $validation['errors']), 400);
    }

    // Map CMS fields to Zoho fields
    $zohoData = mapFieldsToZoho($requestBody);
    logToConsole('Mapped Zoho Data', $zohoData);

    // Submit to Zoho Forms
    $formsResult = submitToZohoForms($zohoData);
    logToConsole('Zoho Forms Response', $formsResult);

    // If CRM is enabled, create lead
    $crmResult = null;
    if (ZOHO_CRM_ENABLED) {
        $crmResult = createZohoCRMLead($zohoData);
        logToConsole('Zoho CRM Response', $crmResult);
    }

    // Send success response first
    sendResponse([
        'message' => 'Form submitted successfully',
        'zoho_forms' => $formsResult,
        'zoho_crm' => $crmResult
    ]);

    // Store submission in local database (optional, after response sent)
    // This way DB errors won't affect the user experience
    try {
        storeSubmission($requestBody);
    } catch (Exception $e) {
        // Silently log but don't fail
        error_log('[ZOHO] Database storage failed: ' . $e->getMessage());
    }
}

/**
 * Validate form data
 */
function validateFormData($data)
{
    $errors = [];

    if (empty($data['name'])) {
        $errors[] = 'Name is required';
    }

    if (empty($data['email'])) {
        $errors[] = 'Email is required';
    } elseif (!isValidEmail($data['email'])) {
        $errors[] = 'Invalid email format';
    }

    if (empty($data['phone'])) {
        $errors[] = 'Phone is required';
    }

    return [
        'valid' => empty($errors),
        'errors' => $errors
    ];
}

/**
 * Map CMS form fields to Zoho form fields
 */
function mapFieldsToZoho($data)
{
    // Extract country code and phone number
    $phone = $data['phone'];
    $countryCode = '91'; // Default to India
    $phoneNumber = $phone;

    // Strip any leading + from phone number
    $phone = ltrim($phone, '+');

    // If phone starts with digits that look like a country code, extract it
    if (preg_match('/^(\d{1,3})(\d{7,})$/', $phone, $matches)) {
        // Check if first part could be a country code (1-3 digits)
        $possibleCode = $matches[1];
        $possibleNumber = $matches[2];

        // Common country codes: 1, 44, 61, 91, 971
        if (in_array($possibleCode, ['1', '44', '61', '91', '971']) || strlen($possibleCode) <= 2) {
            $countryCode = $possibleCode;
            $phoneNumber = $possibleNumber;
        } else {
            // Treat whole thing as phone number
            $phoneNumber = $phone;
        }
    } else {
        // Just use the phone as-is
        $phoneNumber = $phone;
    }

    // Build message field with all additional info
    $message = [];
    if (!empty($data['education'])) {
        $message[] = "Educational Qualification: " . $data['education'];
    }
    if (!empty($data['qualification'])) {
        $message[] = "Educational Qualification: " . $data['qualification'];
    }
    if (!empty($data['question'])) {
        $message[] = $data['question'];
    }

    return [
        'SingleLine' => $data['name'],                    // Full Name
        'PhoneNumber_countrycodeval' => '+' . $countryCode,  // Country Code with + prefix
        'PhoneNumber_countrycode' => $phoneNumber,        // Phone Number
        'Email' => $data['email'],
        'SingleLine2' => $data['courseName'] ?? 'General Inquiry', // Course Name/URL
        'SingleLine3' => $data['education'] ?? $data['qualification'] ?? '', // Education
        'Dropdown2' => $data['profile'] ?? '',            // Current Profile
        'MultiLine' => implode("\n", $message)            // Message
    ];
}

/**
 * Submit to Zoho Forms using cURL
 */
function submitToZohoForms($data)
{
    $ch = curl_init(ZOHO_FORMS_ENDPOINT);

    curl_setopt_array($ch, [
        CURLOPT_POST => true,
        CURLOPT_POSTFIELDS => http_build_query($data),
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_SSL_VERIFYPEER => true,
        CURLOPT_TIMEOUT => 30,
        CURLOPT_HTTPHEADER => [
            'Content-Type: application/x-www-form-urlencoded'
        ]
    ]);

    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $error = curl_error($ch);
    curl_close($ch);

    if ($error) {
        logToConsole('cURL Error', ['error' => $error]);
        throw new Exception('Zoho Forms connection error: ' . $error);
    }

    if ($httpCode !== 200 && $httpCode !== 302) {
        logToConsole('Zoho Forms HTTP Error', ['code' => $httpCode, 'response' => $response]);
        throw new Exception('Zoho Forms returned error code: ' . $httpCode);
    }

    return [
        'status' => $httpCode,
        'success' => true,
        'response' => substr($response, 0, 200) // Truncate for logging
    ];
}

/**
 * Create lead in Zoho CRM (placeholder for future implementation)
 */
function createZohoCRMLead($data)
{
    if (!ZOHO_CRM_ENABLED) {
        return ['status' => 'disabled'];
    }

    // TODO: Implement Zoho CRM API integration when credentials are provided
    // This will require OAuth 2.0 authentication with Zoho CRM

    return [
        'status' => 'not_implemented',
        'message' => 'CRM integration requires OAuth credentials'
    ];
}

/**
 * Store submission in local database
 */
function storeSubmission($data)
{
    try {
        $db = getDB();
        $stmt = $db->prepare("
            INSERT INTO form_submissions 
            (course_id, name, email, phone, education, profile, question, submitted_at, zoho_submitted)
            VALUES (?, ?, ?, ?, ?, ?, ?, NOW(), 1)
        ");

        $stmt->execute([
            $data['courseId'] ?? null,
            $data['name'],
            $data['email'],
            $data['phone'],
            $data['education'] ?? $data['qualification'] ?? null,
            $data['profile'] ?? null,
            $data['question'] ?? null
        ]);

        logToConsole('Database Storage', ['success' => true, 'id' => $db->lastInsertId()]);
    } catch (Exception $e) {
        // Log but don't fail the submission
        logToConsole('Database Storage Error', ['error' => $e->getMessage()]);
        error_log('[ZOHO] Failed to store submission locally: ' . $e->getMessage());
    }
}

/**
 * Custom logging function for debugging
 */
function logToConsole($label, $data)
{
    if (!ZOHO_DEBUG_MODE) {
        return;
    }

    $logEntry = [
        'timestamp' => date('Y-m-d H:i:s'),
        'label' => $label,
        'data' => $data
    ];

    error_log('[ZOHO] ' . json_encode($logEntry, JSON_PRETTY_PRINT));
}

// Execute
try {
    submitToZoho();
} catch (Exception $e) {
    logToConsole('Error', ['message' => $e->getMessage(), 'trace' => $e->getTraceAsString()]);
    sendError($e->getMessage(), 500);
}
