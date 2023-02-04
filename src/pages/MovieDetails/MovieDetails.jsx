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
          <h2>{details.original_title}</h2>
          <p>qweqwe</p>
          <h3>Owerview</h3>
          <p>qweqwe</p>
          <h3>Genres</h3>
          <p>qweqwe</p>
        </div>
      )}
    </>
  );
};
