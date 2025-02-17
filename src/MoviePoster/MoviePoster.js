import './MoviePoster.css';

function MoviePoster({poster_path, vote_count, id, updateVote, handleClick}) {
  return (
    <section className='MoviePoster'>
      <img src= { poster_path } alt= "Movie Poster" onClick={() => handleClick(id) }/>
      <p> <button onClick={() => updateVote(id, 'up') }>⬆️</button> { vote_count } <button onClick={() => updateVote(id, 'down') }>⬇️</button></p>
    </section>
  );
}

export default MoviePoster;
