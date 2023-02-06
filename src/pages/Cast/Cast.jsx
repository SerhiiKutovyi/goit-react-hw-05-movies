import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CastStyleds, CastP } from './Cast.styleds';
import { fetchMovieCredits } from 'services/moviesApi';

const Cast = () => {
  const [creditsId, setCreditsId] = useState([]);
  const { moviesId } = useParams();

  useEffect(() => {
    if (moviesId !== '' && moviesId !== null)
      fetchMovieCredits(moviesId).then(setCreditsId);
  }, [moviesId]);

  return (
    <>
      {creditsId &&
        creditsId.map(
          ({ id, original_name, profile_path = 'No photo', character }) => (
            <CastStyleds key={id}>
              <img
                src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
                alt={original_name}
              />
              <span>{original_name}</span>
              <CastP>character: {character}</CastP>
            </CastStyleds>
          )
        )}
    </>
  );
};
export default Cast;
