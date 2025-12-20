<?php
/**
 * Database Configuration for dev.expertisoracademy.in
 * Yash Host SMM Plan
 */

// Database Configuration
define('DB_HOST', 'localhost');
define('DB_NAME', 'yppgpgkj_expertisor_dev');  // Your dev database name
define('DB_USER', 'yppgpgkj_devuser');          // Your dev database user
define('DB_PASS', 'YOUR_DEV_DB_PASSWORD');      // ← CHANGE THIS

// JWT Secret for Authentication
define('JWT_SECRET', 'fb3e769c95c44e7e8a1be8e0847d814d9bdfc31f91d58d7588ae37e0ce2ef5b7');

// File Upload Settings
define('UPLOAD_DIR', __DIR__ . '/../uploads/');
define('MAX_FILE_SIZE', 5 * 1024 * 1024); // 5MB
define('ALLOWED_TYPES', ['application/pdf']);

// CORS Settings for DEV Environment
header('Access-Control-Allow-Origin: https://dev.expertisoracademy.in');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Access-Control-Allow-Credentials: true');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Error Reporting (disable in production)
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Database Connection Function
function getDBConnection()
{
    static $conn = null;

    if ($conn === null) {
        $conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);

        if ($conn->connect_error) {
            error_log("Database connection failed: " . $conn->connect_error);
            http_response_code(500);
            echo json_encode(['error' => 'Database connection failed']);
            exit();
        }

        $conn->set_charset('utf8mb4');
    }

    return $conn;
}
?>