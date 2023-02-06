import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from 'servises/moviesApi';

export const useFetchMovieCredits = () => {
  const [creditsId, setCreditsId] = useState(null);
  const { crdId } = useParams();

  useEffect(() => {
    fetchMovieCredits(crdId).then(setCreditsId);
  }, [crdId]);
  return creditsId;
};
