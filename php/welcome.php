<?php
session_start();

// If user is not logged in, redirect to login
if (!isset($_SESSION['username'])) {
    header("Location: ../login.html?error=" . urlencode("Please log in first"));
    exit();
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Welcome - Absolute Cinema</title>
    <link rel="stylesheet" href="../css/style.css">
</head>
<body>
    <div class="login-container">
        <div class="login-card">
            <h1>Welcome!</h1>
            <p>Hello, <strong><?php echo htmlspecialchars($_SESSION['username']); ?></strong>! You are successfully logged in.</p>

            <div style="margin-bottom: 20px; display: flex; flex-direction: column; gap: 10px;">
                <a href="../home.html" class="btn" style="font-size: 16px; padding: 10px 20px;">Go to Home</a>
                <a href="../favoritesmovies.html" class="btn" style="font-size: 16px; padding: 10px 20px;">Explore Movies</a>
            </div>

            <span>
                <a href="logout.php" style="color: #ff6b6b;">Logout</a>
            </span>
        </div>
    </div>
</body>
</html>