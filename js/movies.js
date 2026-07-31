const API_KEY = "314efb140c2089c414a80136bf4ea51b";


const buttons = document.querySelectorAll(".add-movie");


buttons.forEach(button => {


    button.addEventListener("click", function(){


        let card = this.parentElement;


        card.innerHTML = `

            <input 
            class="movie-input"
            placeholder="Search movie..."
            autocomplete="off"
            >

            <div class="suggestions"></div>

        `;


        let input = card.querySelector(".movie-input");
        let suggestions = card.querySelector(".suggestions");



        input.addEventListener("input", async function(){


            let query = input.value.trim();



            if(query.length < 3){

                suggestions.innerHTML = "";
                return;

            }



            let response = await fetch(

                `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&language=es-ES`

            );



            let data = await response.json();



            suggestions.innerHTML = "";



            data.results.slice(0,5).forEach(movie => {



                let option = document.createElement("div");


                option.classList.add("suggestion");



                let poster = movie.poster_path

                ? `https://image.tmdb.org/t/p/w92${movie.poster_path}`

                : "images/no-poster.png";



                option.innerHTML = `

                    <img src="${poster}">

                    <span>
                        ${movie.title} 
                        (${movie.release_date?.slice(0,4) || ""})
                    </span>

                `;



                option.addEventListener("click", function(){



                    if(movie.poster_path){


                        card.innerHTML = `

                            <img 
                            src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
                            >

                        `;


                    }



                });



                suggestions.appendChild(option);



            });



        });



    });


});