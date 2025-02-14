import './MoviesContainer.css';
import MoviePoster from '../MoviePoster/MoviePoster.js';

function Movies( {movies, upVote, downVote, onClick} ) {

  const movieCards = movies.map(movie => {
    return (
      < MoviePoster 
          poster_path = { movie.poster_path } 
          vote_count = { movie.vote_count }
          id={ movie.id } 
          key={ movie.id }
          upVote = { upVote }
          downVote= { downVote }
          handleClick= { onClick }
      />
    )
  })

  return (
      <section className='MoviesContainer'>
        { movieCards }
      </section>
  );
}
  

export default Movies;

