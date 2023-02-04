import { useFetchMovieDetails } from 'hooks/FetchMovieDetails';

export const MovieDetails = () => {
  const details = useFetchMovieDetails();
  console.log(2222, details);

  return (
    <>
      {details && (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w200/${details.poster_path}`}
            alt="ert"
          />
          <h2>
            {details.title} ({details.release_date})
          </h2>

          <p>User score: {details.popularity}</p>
          <h3>Owerview</h3>
          <p>{details.overview}</p>
          <h3>Genres</h3>
          <p>{details.genres.name}</p>
        </div>
      )}
    </>
  );
};
