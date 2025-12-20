<?php
/**
 * File Upload API
 * 
 * Handles uploads for course thumbnails and brochures
 * POST /api/upload.php
 */

require_once 'config.php';

// Require authentication
requireAuth();

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    sendError('Method not allowed', 405);
}

if (!isset($_FILES['file'])) {
    sendError('No file uploaded', 400);
}

$file = $_FILES['file'];
$uploadDir = '../assets/uploads/';

// Ensure upload directory exists
if (!file_exists($uploadDir)) {
    mkdir($uploadDir, 0777, true);
}

// Validation
$allowedTypes = [
    'image/jpeg',
    'image/png',
    'image/webp',
    'image/gif',
    'application/pdf'
];

if (!in_array($file['type'], $allowedTypes)) {
    sendError('Invalid file type. Allowed: JPG, PNG, WEBP, GIF, PDF', 400);
}

if ($file['size'] > 5 * 1024 * 1024) { // 5MB limit
    sendError('File size exceeds 5MB limit', 400);
}

// Generate unique filename
$extension = pathinfo($file['name'], PATHINFO_EXTENSION);
$filename = uniqid('upload_') . '_' . time() . '.' . $extension;
$targetPath = $uploadDir . $filename;
$publicPath = '/assets/uploads/' . $filename;

// Move uploaded file
if (move_uploaded_file($file['tmp_name'], $targetPath)) {
    sendResponse([
        'url' => $publicPath,
        'filename' => $filename,
        'original_name' => $file['name']
    ]);
} else {
    sendError('Failed to save file', 500);
}
