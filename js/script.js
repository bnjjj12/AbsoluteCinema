document.addEventListener("DOMContentLoaded", () => {
    // Feedback for both register.html and login.html
    const feedback = document.getElementById("feedback");
    const params = new URLSearchParams(window.location.search);

    // Check whether query string is (?error= or ?success=)
    if (feedback) {
        if (params.has("error")) {
            feedback.textContent = params.get("error");
            feedback.className = "error";
        } else if (params.has("success")) {
            feedback.textContent = params.get("success");
            feedback.className = "success";
        }
    }

    // Login Form Validation
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            const usernameInput = document.getElementById('username');
            const passwordInput = document.getElementById('password');
            const username = usernameInput ? usernameInput.value.trim() : '';
            const password = passwordInput ? passwordInput.value : '';

            if (!username || !password) {
                event.preventDefault();
                if (feedback) {
                    feedback.textContent = "Please fill in both username and password.";
                    feedback.className = "error";
                }
            }
        });
    }

    // Registration Form Validation 
    const registerForm = document.getElementById('registerForm');
    
    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            const usernameInput = document.getElementById('username');
            const passwordInput = document.getElementById('password');
            const username = usernameInput ? usernameInput.value.trim() : '';
            const password = passwordInput ? passwordInput.value : '';

            if (
                username.length < 5 || username.length > 20 ||
                password.length < 5 || password.length > 20
            ) {
                event.preventDefault();
                if (feedback) {
                    feedback.textContent = "Username and password must be between 5 and 20 characters.";
                    feedback.className = "error";
                }
                return;
            }

            // Username validation checking if it has letters and numbers
            const hasLetter = /[a-zA-Z]/.test(username); 
            const hasNumber = /[0-9]/.test(username); 

            if (!hasLetter || !hasNumber) {
                event.preventDefault(); 
                if (feedback) {
                    feedback.textContent = "Username must contain at least one letter and one number.";
                    feedback.className = "error";
                }
                return; 
            }

            // Password validation checking if password has lowercase, uppercase, a number, and a symbol
            const hasLowercase = /[a-z]/.test(password); 
            const hasUppercase = /[A-Z]/.test(password); 
            const hasDigit = /[0-9]/.test(password); 
            const hasSpecialChar = /[!@#\$%\^&\*\(\)_\+\-=\[\]{};':"\\|,.<>\/?]/.test(password); 

            if (!hasLowercase || !hasUppercase || !hasDigit || !hasSpecialChar) {
                event.preventDefault(); 
                if (feedback) {
                    feedback.textContent = "Password must contain a lowercase, uppercase, number, and special character.";
                    feedback.className = "error";
                }
                return;
            }
        });
    }
});