import { useFetchMovieDetails } from 'hooks/useFetchMovieDetails';
import { Details, Additional } from './MovieDetails.styleds';
import { NavLink, Link, Outlet } from 'react-router-dom';

const MovieDetails = () => {
  const details = useFetchMovieDetails();

  return (
    <>
      <Link to="/"> Beck</Link>

      {details && (
        <Details>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w300/${details.poster_path}`}
              alt={details.name}
            />
          </div>
          <div>
            <h2>
              {details.title} ({details.release_date})
            </h2>
            <p>User score: {details.popularity}</p>
            <h3>Owerview</h3>
            <p>{details.overview}</p>
            <h3>Genres</h3>
            <p>{details.genres.name}</p>
          </div>
        </Details>
      )}
      <p>Additional information</p>
      <Additional>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </Additional>
      <Outlet />
    </>
  );
};

export default MovieDetails;
