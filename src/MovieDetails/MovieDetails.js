import './MovieDetails.css';

function MovieDetails({ movie }) {
  return (
    <section className='MovieDetails'>
      <img src= { movie.backdrop_path } alt={ movie.title } poster/>
      <h1>{ movie.title }</h1>
      <div className="genres">
        {movie.genre_ids.map((genre, index) => (
          <h2 key={index}>{ genre }</h2>
      ))}
      </div>
      <p>{ movie.overview } </p>
    </section>
  );
}

export default MovieDetails;
