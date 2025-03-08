
let input = document.getElementById("input-box");
let btn = document.getElementById("btn");
const grid = document.querySelector(".grid");

let allMovies = [];
fetch("https://movie-project-ko1b.onrender.com/movies")
    .then(response => response.json())
    .then(data => {
        console.log("API Response:", data);
        allMovies = data.getMovies;
        showAllMovies(allMovies);
    })
    .catch(error => console.error("Error fetching movies:", error));

// dislay all movie
function showAllMovies(movies) {
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
             <p>${movie.year} | ${movie.genre.join(", ")}</p>
           <p>⭐ <span class="rating">${movie.rating}</span></p>

        `;
        grid.appendChild(movieDiv);
    });
}
   // search movie by year
function searchMovie() {
    let searchTitle = input.value.trim(); 
    if (searchTitle === "") {
        showAllMovies(allMovies); 
        return;
    }
    let filteredMovies = allMovies.filter(movie => movie.title == searchTitle); 
    showAllMovies(filteredMovies);
}
btn.addEventListener("click", searchMovie);

input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        searchMovie();
    }
});



