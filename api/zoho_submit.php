<?php
/**
 * Zoho Forms Submission Proxy
 * 
 * This endpoint receives form data from the frontend and submits it to Zoho Forms
 * on behalf of the client, bypassing CORS and security restrictions.
 */

// Suppress all errors and warnings to ensure clean JSON output
error_reporting(0);
ini_set('display_errors', '0');

// Enable CORS for frontend
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
    exit();
}

// Get JSON input
$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Invalid JSON']);
    exit();
}

// Zoho Forms submission URL
$zohoFormUrl = 'https://forms.zohopublic.in/expertisoracademy/form/AllCMSForms/formperma/9SP12BRNfA67alx_rvCEK3lUhvd25rwIj1-kpZHEDX8/htmlRecords/submit';

// Prepare form data for Zoho
$formData = [
    'SingleLine' => $data['company'] ?? 'Expertisor Academy',
    'SingleLine1' => $data['lastName'] ?? '',
    'SingleLine2' => $data['firstName'] ?? '',
    'Email' => $data['email'] ?? '',
    'PhoneNumber' => $data['phone'] ?? '',
    'Website' => $data['website'] ?? '',
    'PhoneNumber1' => $data['mobile'] ?? '',
    'Dropdown' => $data['leadSource'] ?? 'Website - Landing Page',
    'SingleLine3' => $data['country'] ?? 'India',
    'MultiLine' => $data['description'] ?? '',
    'Decimal' => $data['averageTimeSpent'] ?? '0',
    'DateTime' => $data['firstVisit'] ?? '',
    'Number' => $data['daysVisited'] ?? '0',
    'zf_referrer_name' => $data['referrer'] ?? '',
    'zf_redirect_url' => '',
    'zc_gad' => ''
];

// Log the submission for debugging
error_log('Zoho Form Submission: ' . json_encode($formData));

// Initialize cURL
$ch = curl_init();

// Set cURL options
curl_setopt($ch, CURLOPT_URL, $zohoFormUrl);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($formData));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, true);
curl_setopt($ch, CURLOPT_TIMEOUT, 30);

// Set headers to mimic a browser
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/x-www-form-urlencoded',
    'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
    'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
    'Accept-Language: en-US,en;q=0.5',
    'Referer: ' . ($data['website'] ?? 'https://expertisoracademy.in')
]);

// Execute the request
$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$error = curl_error($ch);

// Close curl (suppress deprecation warning in PHP 8.5+)
@curl_close($ch);

// Log the response
error_log('Zoho Response Code: ' . $httpCode);
error_log('Zoho Response: ' . substr($response, 0, 500)); // Log first 500 chars

// Check if submission was successful
// Zoho returns 200 with HTML page on success
if ($httpCode >= 200 && $httpCode < 400) {
    echo json_encode([
        'success' => true,
        'message' => 'Form submitted successfully to Zoho',
        'httpCode' => $httpCode
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'error' => 'Failed to submit to Zoho',
        'httpCode' => $httpCode,
        'curlError' => $error
    ]);
}
?>