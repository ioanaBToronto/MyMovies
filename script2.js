
fetch('movies.csv')
  .then(response => response.text())
  .then(data => {
    const rows = data.split('\n').slice(1); // Skip header
    const movieList = document.getElementById('movie-list');

    rows.forEach(row => {
      const [title, rating, genre, poster] = row.split(',');

      const card = document.createElement('div');
      card.className = 'movie-card';
      card.innerHTML = `
        <img src="${poster}" alt="Poster for ${title}">
        <h3>${title}</h3>
        <p>Rating: ${rating}/10</p>
        <p>Genre: ${genre}</p>
      `;
      movieList.appendChild(card);
    });
  })
  .catch(error => console.error('Error loading CSV:', error));
