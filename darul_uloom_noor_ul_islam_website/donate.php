<?php
// Allow requests from any origin (for development/testing purpose)
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

// Check if request is POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Collect form data
    $name = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';
    $amount = $_POST['amount'] ?? '';

    // Basic validation
    if ($name && $email && $amount) {
        // You can save this data to a database or send email here
        echo json_encode([
            'status' => 'success',
            'message' => 'Donation received successfully.'
        ]);
    } else {
        echo json_encode([
            'status' => 'error',
            'message' => 'Missing required fields.'
        ]);
    }
} else {
    echo json_encode([
        'status' => 'error',
        'message' => 'Invalid request method.'
    ]);
}
?>
