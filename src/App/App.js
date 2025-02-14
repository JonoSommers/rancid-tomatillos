import { useState, useEffect } from 'react';
import './App.css';
// import searchIcon from '../icons/search.png';
import homeIcon from '../icons/home.png';
import MoviesContainer from '../MoviesContainer/MoviesContainer.js';
import MovieDetails from '../MovieDetails/MovieDetails.js';


function App() {
  const [movies, setMovies] = useState([]);
  const [clickedMovie, setClickedMovie] = useState(false);

  function getMovies() {
    fetch("https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies")
    .then(response => response.json())
    .then(data => {
      setMovies([...data])
    })
    .catch(error => console.log('error message: ', error.message))
  }

  useEffect(() => {
    getMovies();
  }, [])

  const handleClick = () => {
    setClickedMovie(movies)
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
        return {...movie, vote_count: movie.vote_count - 1}
      }
      return movie
    }))
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
        <MoviesContainer movies = { movies } onClick={ handleClick } upVote={ upVote } downVote={ downVote } />
      </main>
    );
  }
}

export default App;
