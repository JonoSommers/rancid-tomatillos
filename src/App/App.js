import { useState, useEffect } from 'react';
import './App.css';
// import searchIcon from '../icons/search.png';
import homeIcon from '../icons/home.png';
import MoviesContainer from '../MoviesContainer/MoviesContainer.js';
import MovieDetails from '../MovieDetails/MovieDetails.js';
import { Routes, Route, NavLink } from 'react-router-dom';

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

  function handleClick(id) {
    fetch(`https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies/${id}`)
    .then(response => response.json())
    .then(data => {
      setClickedMovie(data)
    })
    .catch(error => console.log('error message: ', error.message))
  }

  function changeVoteCountValue(id, targetedMovie) {
    setMovies(movies => movies.map((movie) => {
      if (movie.id === id) {
        return {...movie, vote_count: targetedMovie.vote_count }
      }
      return movie
    }))
  }

  function updateVote(id, direction) {
    const requestBodyUp = { vote_direction: direction };

    fetch(`https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBodyUp)
    })
    .then(response => response.json())
    .then(data => {
      console.log('data: ', data)
      changeVoteCountValue(id, data)
    })
    .catch(error => console.log('error message: ', error.message))
  }


  return (
    <main className='App'>
      <nav>
        <NavLink to='/' className='nav'></NavLink>
        <NavLink to='/:movieId' className='nav'></NavLink>
      </nav>
      <header>
        <h1>Rancid Tomatillos</h1>
      </header>
      <Routes>
        <Route path='/' element={<MoviesContainer movies={movies}/>}/>
        <Route path='/:movieId' element={<MovieDetails />}/>
      </Routes>
    </main>
  );
}

export default App;
