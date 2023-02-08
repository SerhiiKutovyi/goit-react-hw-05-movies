import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CastStyleds, CastDiv } from './Cast.styleds';
import { fetchMovieCredits } from 'services/moviesApi';
import photo from '../../photo/broken_img.png';

const Cast = () => {
  const [creditsId, setCreditsId] = useState([]);
  const { moviesId } = useParams();

  useEffect(() => {
    if (moviesId !== '' && moviesId !== null)
      fetchMovieCredits(moviesId).then(setCreditsId);
  }, [moviesId]);

  return (
    <CastDiv>
      {creditsId.length === 0 ? (
        <p> We don't have reviews for actors' photos. </p>
      ) : (
        creditsId.map(
          ({ id, original_name, profile_path = 'No photo', character }) => (
            <CastStyleds key={id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w200/${profile_path}`
                    : photo
                }
                alt={original_name}
              />
              <h3>{original_name}</h3>
              <span>character: {character}</span>
            </CastStyleds>
          )
        )
      )}
    </CastDiv>
  );
};
export default Cast;
