import './MoviePoster.css';

function MoviePoster({poster_path, vote_count, onClick}) {
  return (
    <section className='MoviePoster'>
      <img src= { poster_path } alt= "Movie Poster" onClick = {onClick}/>
      <p>{ vote_count }</p>
    </section>
  );
}

export default MoviePoster;