const backButton = document.getElementById("back-button");


backButton.addEventListener("click", function(event){

    event.preventDefault();


    if(localStorage.getItem("username")) {

        window.location.href = "home.html";

    } else {

        window.location.href = "introduction.html";

    }

});