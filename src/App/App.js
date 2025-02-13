import { useState } from 'react';
import './App.css';
import searchIcon from '../icons/search.png';
import homeIcon from '../icons/home.png';
import moviePosters from '../data/movie_posters';
import MoviesContainer from '../MoviesContainer/MoviesContainer';

// Example imports (for later):
// import { useState, useEffect } from 'react';
// import movieDetails from '../data/movie_details';

function App() {
  const [movies, setMovies] = useState(moviePosters);
<<<<<<< HEAD
  
  return (
    <main className='App'>
      <header>
        <h1>Rancid Tomatillos</h1>
      </header>
      <MoviesContainer movies = { movies } />
    </main>
  );
=======
  const [clickedMovie, setClickedMovie] = useState(false);

  const handleClick = () => {
    setClickedMovie(movieDetails)
  }

  if (clickedMovie) {
    return (
      <main className='App'>
        <header>
          <h1>Rancid Tomatillos</h1>
          <img className="homeIcon" src={homeIcon} alt="Back to home" onClick={ () => setClickedMovie(false) }></img>
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
>>>>>>> d20cf19 (feat: added home icon in MovieDetails to return back to home when clicking on the icon)
}

export default App;
