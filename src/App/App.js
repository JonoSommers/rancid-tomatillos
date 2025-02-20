import { useState, useEffect } from 'react';
import { Routes, Route, NavLink, useLocation  } from 'react-router-dom';
import './App.css';
import homeIcon from '../icons/home.png';
import MoviesContainer from '../MoviesContainer/MoviesContainer.js';
import MovieDetails from '../MovieDetails/MovieDetails.js';

function App() {
  const [movies, setMovies] = useState([]);
  const location = useLocation(); 

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
      changeVoteCountValue(id, data)
    })
    .catch(error => console.log('error message: ', error.message))
  }

  return (
    <main className='App'>
      <header>
        <h1>Rancid Tomatillos</h1>
        {location.pathname.split('/').length === 2 && location.pathname !== '/' && (
          <NavLink to="/">
            <img className="homeIcon" src={homeIcon} alt="Back to Home" />
          </NavLink>
        )}
      </header>
      <Routes>
        <Route path="/" element={<MoviesContainer movies={movies} updateVote={updateVote} />} />
        <Route path="/:movieId" element={<MovieDetails  />} />
      </Routes>
    </main>
  );
}

export default App;
