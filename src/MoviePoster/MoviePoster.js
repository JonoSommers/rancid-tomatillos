import './MoviePoster.css';
import { Link } from 'react-router-dom';

function MoviePoster({poster_path, vote_count, id, updateVote}) {
  return (
    <section className='MoviePoster'>
      <Link to={`/${id}`}>
        <img src= { poster_path } alt= "Movie Poster" />
      </Link>
      <p> 
        <button onClick={() => updateVote(id, 'up') }>⬆️</button> { vote_count } <button onClick={() => updateVote(id, 'down') }>⬇️</button>
      </p>
    </section>
  );
}

export default MoviePoster;
