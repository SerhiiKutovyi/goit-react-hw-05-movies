import { useFetchMovieDetails } from 'hooks/useFetchMovieDetails';
import { Details, Additional } from './MovieDetails.styleds';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { StyledLinkBtn, ImgDiv } from './MovieDetails.styleds';

const MovieDetails = () => {
  const details = useFetchMovieDetails();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  return (
    <>
      <StyledLinkBtn to={backLinkHref}>Go back</StyledLinkBtn>

      {details && (
        <Details>
          <ImgDiv>
            <img
              src={`https://image.tmdb.org/t/p/w300/${details.poster_path}`}
              alt={details.name}
            />
          </ImgDiv>
          <div>
            <h2>
              {details.title} ({details.release_date})
            </h2>
            <p>User score: {Math.floor(details.popularity * 10)}%</p>
            <h3>Overview</h3>
            <p>{details.overview}</p>
            <h3>Genres</h3>
            <ul>
              {details.genres.map(({ name, id }) => (
                <li key={id}>{name}</li>
              ))}
            </ul>
          </div>
        </Details>
      )}

      <Additional>
        <p>Additional information</p>
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
