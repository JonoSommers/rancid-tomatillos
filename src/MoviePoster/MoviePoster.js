import './MoviePoster.css';


function MoviePoster({poster_path, vote_count}) {
  return (
    <section className='MoviePoster'>
      <h3>{ poster_path }</h3>
      <p>{ vote_count }</p>
    </section>
  );
}

export default MoviePoster;