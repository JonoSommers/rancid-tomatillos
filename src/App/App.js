import { useState } from 'react';
import './App.css';
import searchIcon from '../icons/search.png';
import moviePosters from '../data/movie_posters';
import MoviesContainer from '../MoviesContainer/MoviesContainer';

// Example imports (for later):
// import { useState, useEffect } from 'react';
// import movieDetails from '../data/movie_details';

function App() {
  const [movies, setMovies] = useState(moviePosters);
  
  return (
    <main className='App'>
      <header>
        <h1>Rancid Tomatillos</h1>
      </header>
      <MoviesContainer movies = { movies } />
    </main>
  );
}

export default App;
