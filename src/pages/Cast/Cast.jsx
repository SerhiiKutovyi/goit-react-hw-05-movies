import { CastStyleds } from './Cast.styleds';
import { fetchMovieCredits } from 'services/moviesApi';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  // const [creditsId, setCreditsId] = useState([]);
  const { creditsId1 } = useParams();
  console.log(creditsId1);
  // useEffect(() => {
  //   fetchMovieCredits(creditsId).then(setCreditsId);
  // }, [creditsId]);
  // return (
  //   <>
  //     <CastStyleds>{creditsId}</CastStyleds>
  //   </>
  // );
};
