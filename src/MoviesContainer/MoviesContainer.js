import './MoviesContainer.css';
import MoviePoster from '../MoviePoster/MoviePoster.js';

function MoviesContainer( {movies, onClick} ) {
  const movieCards = movies.map((movie) => {
    return (
      < MoviePoster 
          poster_path = { movie.poster_path } 
          vote_count = { movie.vote_count } 
          onClick= { onClick }
      />
    )
  })

  return (
      <section className='MoviesContainer'>
        { movieCards }
      </section>
  );
}
  
export default MoviesContainer;