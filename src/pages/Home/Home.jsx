import { useEffect, useState } from 'react';
import { fetchTrendingToday } from 'servises/moviesApi';

export const Home = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    fetchTrendingToday().then(setTrending);
  }, []);
  return (
    <>
      <h1>Trending today</h1>
    </>
  );
};
