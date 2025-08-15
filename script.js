const form = document.getElementById('movie-form');
const movieList = document.getElementById('movie-list');
let movies = [];

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const rating = document.getElementById('rating2').value;
  movies.push({ title, rating });
  displayMovies();
  form.reset();
});

function displayMovies() {
  movieList.innerHTML = '';
  movies.forEach((movie) => {
    movieList.innerHTML += `<div>${movie.title} - Rating: ${movie.rating}/10</div>`;
  });
}
