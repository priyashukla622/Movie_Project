
let input = document.getElementById("input-box");
let btn = document.getElementById("btn");
const grid = document.querySelector(".grid");

btn.addEventListener("click", searchMovie);

function displayMovies(movies) {
    grid.innerHTML = ""; 

    if (movies.length === 0) {
        grid.innerHTML = `<p class="para">No movies found for this year.</p>`;
        return;
    }
    movies.forEach(movie => {
        let movieDiv = document.createElement("div");
        movieDiv.classList.add("box");

        movieDiv.innerHTML = `
            <img src="${movie.poster}" alt="${movie.title}" width="180">
            <h3>${movie.title}</h3>
            <p>${movie.year}</p>
            <p> ${movie.genre.join(", ")}</p>
           <p>⭐ <span class="rating">${movie.rating}</span></p>

        `;

        grid.appendChild(movieDiv);
    });
}
// display all movie
let allMovies = [];
fetch("http://localhost:3000/movies")
    .then(response => response.json())
    .then(data => {
        console.log("API Response:", data);
        allMovies = data.getMovies;
        displayMovies(allMovies);
    })
    .catch(error => console.error("Error fetching movies:", error));
   // search movie by year
function searchMovie() {
    let searchYear = input.value.trim(); 
    if (searchYear === "") {
        displayMovies(allMovies); 
        return;
    }
    let filteredMovies = allMovies.filter(movie => movie.year == searchYear); 
    displayMovies(filteredMovies);
}