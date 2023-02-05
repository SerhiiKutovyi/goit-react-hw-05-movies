import { useFetchMovieDetails } from 'hooks/FetchMovieDetails';
import { Details } from './MovieDetails.styleds';

export const MovieDetails = () => {
  const details = useFetchMovieDetails();

  return (
    <>
      {details && (
        <Details>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w300/${details.poster_path}`}
              alt="ert"
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
    </>
  );
};
