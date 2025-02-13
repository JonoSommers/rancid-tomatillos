import './MoviePoster.css';


function MoviePoster({poster_path, vote_count, id, upVote, downVote}) {
  return (
    <section className='MoviePoster'>
      <img src= { poster_path } alt= "Movie Poster"/>
      <p> <button onClick={() => upVote(id) }>⬆️</button> { vote_count } <button onClick={() => downVote(id) }>⬇️</button></p>
    </section>
  );
}

export default MoviePoster;