<?php
session_start(); // Starts the session

require_once 'db_connect.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $input_user = trim($_POST['username'] ?? '');
    $input_pass = $_POST['password'] ?? '';

    if (empty($input_user) || empty($input_pass)) {
        header("Location: ../login.html?error=" . urlencode("Please fill in all fields"));
        exit();
    }

    // Fetch user by username
    $sql = "SELECT * FROM users WHERE username = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $input_user);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows === 1) {
        $user = $result->fetch_assoc();

        // Verify password against hash
        if (password_verify($input_pass, $user['password'])) {
            $_SESSION['username'] = $user['username'];
            header("Location: welcome.php");
            exit();
        }
    } 
    
    header("Location: ../login.html?error=" . urlencode("Invalid username or password"));
    exit();
}
?>