let username = localStorage.getItem("username");


if(username) {

    document.getElementById("welcome").innerHTML =
    "Welcome Back, " + username;

}