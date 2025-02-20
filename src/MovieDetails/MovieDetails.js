import { useParams, Link } from 'react-router-dom';
import './MovieDetails.css';

function MovieDetails({ clickedMovie }) {
  const clickedMovieId = useParams().movieId
  console.log('movie id: ', clickedMovieId)
  const movieDetails = movies.map(movie => {
    const { backdrop_path, title, genre_ids, overview } = movie

    return (
      <Link to={`/${clickedMovieId}`}>
        <section className='MovieDetails'>
          <img src= { backdrop_path } alt={ title } poster/>
          <h1>{ title }</h1>
          <div className="genres">
            {genre_ids.map((genre, index) => (
              <h2 key={index}>{ genre }</h2>
          ))}
          </div>
          <p>{ overview } </p>
        </section>
      </Link>
    );
  })

  return (
    <>
    {movieDetails}
    </>
  )
}

export default MovieDetails;
