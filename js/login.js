const loginForm = document.getElementById("login-form");


loginForm.addEventListener("submit", function(event) {

    event.preventDefault();


    let username = document.getElementById("username").value;

    let password = document.getElementById("password").value;


    let savedUsername = localStorage.getItem("username");

    let savedPassword = localStorage.getItem("password");


    if (username === savedUsername && password === savedPassword) {

        window.location.href = "home.html";

    } else {

        alert("Incorrect username or password");

    }

});