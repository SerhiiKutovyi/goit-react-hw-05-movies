import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetailsById } from 'servises/moviesApi';

export const useFetchMovieDetails = () => {
  const [details, setDetails] = useState(null);
  const { moviesId } = useParams();

  useEffect(() => {
    if (!moviesId) return;
    fetchMovieDetailsById(moviesId).then(setDetails);
  }, [moviesId]);
  return details;
};
