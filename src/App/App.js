import { useState, useEffect } from 'react';
import './App.css';
import searchIcon from '../icons/search.png';
import moviePosters from '../data/movie_posters';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import movieDetails from '../data/movie_details';
import MovieDetails from '../MovieDetails/MovieDetails';

function App() {
  const [movies, setMovies] = useState(moviePosters);
  const [clickedMovie, setClickedMovie] = useState(false);

  const handleClick = () => {
    setClickedMovie(movieDetails)
  }
  debugger;

  if (clickedMovie) {
    return (
      <main className='App'>
        <header>
          <h1>Rancid Tomatillos</h1>
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
        <MoviesContainer movies = { movies } onClick={handleClick}/>
      </main>
    );
  }
}

export default App;
