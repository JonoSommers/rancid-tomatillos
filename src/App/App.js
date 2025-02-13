import { useState } from 'react';
import './App.css';
import moviePosters from '../data/movie_posters';
import MoviesContainer from '../MoviesContainer/MoviesContainer';

// Example imports (for later):
// import { useState, useEffect } from 'react';
// import movieDetails from '../data/movie_details';
// import searchIcon from '../icons/search.png';

function App() {
  const [movies, setMovies] = useState(moviePosters);

  function upVote(id) {
    setMovies(movies => movies.map((movie) => {
      if (movie.id === id) {
        return {...movie, vote_count: movie.vote_count + 1}
      }
      return movie
    }))
  }

  function downVote(id) {
    setMovies(movies => movies.map((movie) => { 
      if (movie.id === id) {
        return {...movie, vote_count: movie.vote_count + 1}
      }
      return movie
    }))
  }
  
  return (
    <main className='App'>
      <header>
        <h1>Rancid Tomatillos</h1>
      </header>
      <MoviesContainer movies = { movies } upVote={ upVote } downVote={ downVote } />
    </main>
  );
}

export default App;
