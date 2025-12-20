<?php
/**
 * Zoho OAuth Token Setup
 * Run this once to exchange authorization code for access/refresh tokens
 */

// Zoho OAuth credentials
define('CLIENT_ID', '1000.0WIJ6YLXQAL5SJDIJJSEVS9UVXDYQZ');
define('CLIENT_SECRET', '4099516a4050c48521ed8bdf07a310d4388d62deac');
define('REDIRECT_URI', 'https://expertisoracademy.in/oauth/callback');
define('AUTHORIZATION_CODE', '1000.a90085efe2b284da953bb1554f2a427c.6f7e1f071ff2cea59bb64bb91136fe71');
define('TOKEN_FILE', __DIR__ . '/zoho_tokens.json');

echo "Exchanging authorization code for tokens...\n\n";

$url = 'https://accounts.zoho.in/oauth/v2/token';

$postData = [
    'code' => AUTHORIZATION_CODE,
    'client_id' => CLIENT_ID,
    'client_secret' => CLIENT_SECRET,
    'redirect_uri' => REDIRECT_URI,
    'grant_type' => 'authorization_code'
];

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($postData));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

echo "HTTP Code: $httpCode\n";
echo "Response: $response\n\n";

if ($httpCode === 200) {
    $data = json_decode($response, true);

    if (isset($data['access_token']) && isset($data['refresh_token'])) {
        $tokens = [
            'access_token' => $data['access_token'],
            'refresh_token' => $data['refresh_token'],
            'expires_at' => time() + $data['expires_in']
        ];

        file_put_contents(TOKEN_FILE, json_encode($tokens, JSON_PRETTY_PRINT));

        echo "✅ SUCCESS! Tokens saved to: " . TOKEN_FILE . "\n";
        echo "Access Token: " . substr($data['access_token'], 0, 20) . "...\n";
        echo "Refresh Token: " . substr($data['refresh_token'], 0, 20) . "...\n";
        echo "Expires in: " . $data['expires_in'] . " seconds\n";
    } else {
        echo "❌ ERROR: Invalid response format\n";
    }
} else {
    echo "❌ ERROR: Failed to get tokens\n";
}
?>