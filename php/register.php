<?php
session_start(); 
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Pull in single database connection script.
require_once 'db_connect.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $user = trim($_POST['username'] ?? '');
    $pass = $_POST['password'] ?? '';

    if (empty($user) || empty($pass)) {
        header("Location: ../register.html?error=" . urlencode("Please fill in all required fields."));
        exit();
    }

    $hashed_password = password_hash($pass, PASSWORD_BCRYPT);

    // Prepare the SQL statement to prevent SQL injection
    $stmt = $conn->prepare("INSERT INTO users (username, password) VALUES (?,?)");
    $stmt->bind_param("ss", $user, $hashed_password);

    if ($stmt->execute()) {
        $stmt->close();
        $conn->close();
        header("Location: ../login.html?success=" . urlencode("Registration successful! Please log in."));
        exit();
    } else {
        // Redirect back to the register page if something fails (ex: username taken).
        $stmt->close();
        $conn->close();
        header("Location: ../register.html?error=" . urlencode("Registration failed. Username may exist."));
        exit();
    }
}
?>