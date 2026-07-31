const registerForm = document.getElementById("register-form");


registerForm.addEventListener("submit", function(event) {

    event.preventDefault();


    let username = document.getElementById("username").value;

    let password = document.getElementById("password").value;


    localStorage.setItem("username", username);

    localStorage.setItem("password", password);


    window.location.href = "favoritesmovies.html";

});