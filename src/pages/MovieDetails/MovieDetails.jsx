import { useFetchMovieDetails } from 'hooks/useFetchMovieDetails';
import { Details, Additional } from './MovieDetails.styleds';
import { NavLink, Outlet } from 'react-router-dom';
import { StyledLinkBtn } from './MovieDetails.styleds';

const MovieDetails = () => {
  const details = useFetchMovieDetails();

  console.log(222, details);

  return (
    <>
      <StyledLinkBtn to="/">Go back</StyledLinkBtn>

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
            <p>User score: {Math.ceil(details.popularity * 10)}%</p>
            <h3>Overview</h3>
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
