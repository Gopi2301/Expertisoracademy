<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
require_once 'api/config.php';

echo "<h2>Checking Database Tables...</h2>";
$db = getDB();

try {
    // 1. Check if tables exist
    $tables = $db->query("SHOW TABLES")->fetchAll(PDO::FETCH_COLUMN);
    echo "<b>Tables Found:</b><br>";
    if (empty($tables)) {
        echo "<span style='color:red'>❌ NO TABLES FOUND! Did you import api/schema.sql?</span><br>";
    } else {
        echo "<span style='color:green'>" . implode(", ", $tables) . "</span><br><br>";
    }

    // 2. Check Admin User
    if (in_array('admin_users', $tables)) {
        echo "<b>Checking Admin User:</b><br>";
        $stmt = $db->query("SELECT id, username FROM admin_users");
        $users = $stmt->fetchAll(PDO::FETCH_ASSOC);

        if (empty($users)) {
            echo "<span style='color:red'>❌ admin_users table is EMPTY!</span><br>";
        } else {
            echo "<span style='color:green'>✅ Found users: " . json_encode($users) . "</span><br>";
        }
    }

} catch (Exception $e) {
    echo "Error: " . $e->getMessage();
}
?>