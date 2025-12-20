<?php
// Enable CRITICAL Error Reporting
error_reporting(E_ALL);
ini_set('display_errors', 1);

echo "<h2>Step 1: Loading Config...</h2>";
require_once 'api/config.php';
echo "✅ Config Loaded<br>";

echo "<h2>Step 2: Connecting DB...</h2>";
$db = getDB();
echo "✅ DB Connected<br>";

echo "<h2>Step 3: Fetching Admin...</h2>";
$username = 'admin';
$password = 'admin123';

try {
    $stmt = $db->prepare("SELECT * FROM admin_users WHERE username = ?");
    $stmt->execute([$username]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if (!$user) {
        die("❌ User 'admin' not found in DB");
    }
    echo "✅ User found: " . $user['username'] . "<br>";
    echo "Hash in DB: " . $user['password_hash'] . "<br>";

    echo "<h2>Step 4: Verifying Password...</h2>";
    // Check if verifyPassword function exists
    if (!function_exists('verifyPassword')) {
        echo "⚠️ verifyPassword function missing! Using native password_verify...<br>";
        $valid = password_verify($password, $user['password_hash']);
    } else {
        $valid = verifyPassword($password, $user['password_hash']);
    }

    if ($valid) {
        echo "✅ Password is VALID<br>";
    } else {
        echo "❌ Password INVALID. <br>";
        echo "Hash update might be needed.<br>";
        // generate new hash for debugging
        echo "Expected Hash for 'admin123': " . password_hash('admin123', PASSWORD_BCRYPT) . "<br>";
    }

    echo "<h2>Step 5: Testing JWT Generation...</h2>";
    if (!function_exists('generateJWT')) {
        die("❌ generateJWT function is MISSING in config.php");
    }

    $token = generateJWT($user['id'], $user['username']);
    echo "✅ Token Generated: " . substr($token, 0, 20) . "...<br>";

} catch (Exception $e) {
    echo "❌ FATAL ERROR: " . $e->getMessage();
}
?>