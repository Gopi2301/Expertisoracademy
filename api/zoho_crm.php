<?php
/**
 * Zoho CRM API Integration
 * Creates leads directly in Zoho CRM using OAuth 2.0
 */

// Suppress errors for clean JSON output
error_reporting(0);
ini_set('display_errors', '0');

// Enable CORS
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Handle preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
    exit();
}

// Zoho OAuth credentials
define('CLIENT_ID', '1000.0WIJ6YLXQAL5SJDIJJSEVS9UVXDYQZ');
define('CLIENT_SECRET', '4099516a4050c48521ed8bdf07a310d4388d62deac');
define('REDIRECT_URI', 'https://expertisoracademy.in/oauth/callback');
define('TOKEN_FILE', __DIR__ . '/zoho_tokens.json');

/**
 * Get access token (refresh if needed)
 */
function getAccessToken()
{
    if (!file_exists(TOKEN_FILE)) {
        return ['error' => 'No tokens found. Please run initial setup.'];
    }

    $tokens = json_decode(file_get_contents(TOKEN_FILE), true);

    // Check if token is expired (refresh 5 minutes before expiry)
    if (isset($tokens['expires_at']) && time() >= ($tokens['expires_at'] - 300)) {
        // Refresh token
        $tokens = refreshAccessToken($tokens['refresh_token']);
        if (isset($tokens['error'])) {
            return $tokens;
        }
    }

    return $tokens;
}

/**
 * Refresh access token
 */
function refreshAccessToken($refreshToken)
{
    $url = 'https://accounts.zoho.in/oauth/v2/token';

    $postData = [
        'refresh_token' => $refreshToken,
        'client_id' => CLIENT_ID,
        'client_secret' => CLIENT_SECRET,
        'grant_type' => 'refresh_token'
    ];

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($postData));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    @curl_close($ch);

    if ($httpCode !== 200) {
        return ['error' => 'Failed to refresh token: ' . $response];
    }

    $data = json_decode($response, true);

    if (isset($data['access_token'])) {
        // Save new tokens
        $tokens = [
            'access_token' => $data['access_token'],
            'refresh_token' => $refreshToken,
            'expires_at' => time() + $data['expires_in']
        ];

        file_put_contents(TOKEN_FILE, json_encode($tokens));
        return $tokens;
    }

    return ['error' => 'Invalid refresh response'];
}

/**
 * Create lead in Zoho CRM
 */
function createLead($accessToken, $leadData)
{
    $url = 'https://www.zohoapis.in/crm/v2/Leads';

    $data = [
        'data' => [
            [
                'Company' => $leadData['company'],
                'Last_Name' => $leadData['lastName'],
                'First_Name' => $leadData['firstName'],
                'Email' => $leadData['email'],
                'Phone' => $leadData['phone'],
                'Mobile' => $leadData['mobile'],
                // Website field removed - Zoho rejects localhost URLs
                'Lead_Source' => $leadData['leadSource'],
                'Country' => $leadData['country'],
                'Description' => $leadData['description'] . "\n\nPage: " . $leadData['website'],
                // Custom fields for visitor tracking
                'Average_Time_Spent' => $leadData['averageTimeSpent'],
                'First_Visit' => $leadData['firstVisit'],
                'Days_Visited' => $leadData['daysVisited']
            ]
        ]
    ];

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Authorization: Zoho-oauthtoken ' . $accessToken,
        'Content-Type: application/json'
    ]);

    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    @curl_close($ch);

    error_log('Zoho CRM Response Code: ' . $httpCode);
    error_log('Zoho CRM Response: ' . $response);

    return [
        'httpCode' => $httpCode,
        'response' => json_decode($response, true)
    ];
}

// Get JSON input
$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Invalid JSON']);
    exit();
}

// Get access token
$tokens = getAccessToken();
if (isset($tokens['error'])) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => $tokens['error']]);
    exit();
}

// Prepare lead data
$leadData = [
    'company' => $data['company'] ?? 'Expertisor Academy',
    'lastName' => $data['lastName'] ?? '',
    'firstName' => $data['firstName'] ?? '',
    'email' => $data['email'] ?? '',
    'phone' => $data['phone'] ?? '',
    'mobile' => $data['mobile'] ?? '',
    'website' => $data['website'] ?? '',
    'leadSource' => $data['leadSource'] ?? 'Website',
    'country' => $data['country'] ?? 'India',
    'description' => $data['description'] ?? '',
    'averageTimeSpent' => $data['averageTimeSpent'] ?? '0',
    'firstVisit' => $data['firstVisit'] ?? '',
    'daysVisited' => $data['daysVisited'] ?? '0'
];

// Create lead
$result = createLead($tokens['access_token'], $leadData);

if ($result['httpCode'] >= 200 && $result['httpCode'] < 300) {
    echo json_encode([
        'success' => true,
        'message' => 'Lead created successfully in Zoho CRM',
        'data' => $result['response']
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'error' => 'Failed to create lead in Zoho CRM',
        'details' => $result['response']
    ]);
}
?>