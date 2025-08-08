
const form = document.getElementById('movie-form');
const movieList = document.getElementById('movie-list');

// Load movies from localStorage
let movies = JSON.parse(localStorage.getItem('movies')) || [];

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const rating = document.getElementById('rating').value;
  const genre = document.getElementById('genre').value;
  const poster = document.getElementById('poster').value;

  const newMovie = { title, rating, genre, poster };
  movies.push(newMovie);
  localStorage.setItem('movies', JSON.stringify(movies)); // Save to localStorage
  displayMovies();
  form.reset();
});

function displayMovies() {
  movieList.innerHTML = '';
  movies.forEach((movie) => {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.innerHTML = `
      <img src="${movie.poster}" alt="Poster for ${movie.title}">
      <h3>${movie.title}</h3>
      <p>Rating: ${movie.rating}/10</p>
      <p>Genre: ${movie.genre}</p>
    `;
    movieList.appendChild(card);
  });
}

// Initial display
displayMovies();
