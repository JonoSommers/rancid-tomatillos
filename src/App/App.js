import { useState, useEffect } from 'react';
import './App.css';
import searchIcon from '../icons/search.png';
import homeIcon from '../icons/home.png';
import moviePosters from '../data/movie_posters';
import movieDetails from '../data/movie_details';
import MoviesContainer from '../MoviesContainer/MoviesContainer.js';
import MovieDetails from '../MovieDetails/MovieDetails.js';

function App() {
  const [movies, setMovies] = useState(moviePosters);
  const [clickedMovie, setClickedMovie] = useState(false);

  const handleClick = () => {
    setClickedMovie(movieDetails)
  }

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
  
  
  if (clickedMovie) {
    return (
      <main className='App'>
        <header>
          <h1>Rancid Tomatillos</h1>
          <img className="homeIcon" src={homeIcon} alt="Back to home" onClick={() => setClickedMovie(null)} />
        </header>
        <MovieDetails movie={clickedMovie} />
      </main>
    );
  } else {
    return (
      <main className='App'>
        <header>
          <h1>Rancid Tomatillos</h1>
        </header>
        <MoviesContainer movies = { movies } upVote={ upVote } downVote={ downVote } />
      </main>
    );
  }
}

export default App;
