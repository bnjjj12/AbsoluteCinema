const accountBtn = document.getElementById("account-btn");
const accountMenu = document.getElementById("account-menu");
const logoutBtn = document.getElementById("logout-btn");


accountBtn.addEventListener("click", function(event){

    event.preventDefault();


    if(accountMenu.style.display === "block"){

        accountMenu.style.display = "none";

    } else {

        accountMenu.style.display = "block";

    }

});



logoutBtn.addEventListener("click", function(){

    localStorage.removeItem("username");
    localStorage.removeItem("password");


    window.location.href = "introduction.html";

});