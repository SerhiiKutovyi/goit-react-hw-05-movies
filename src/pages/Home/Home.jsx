import { useEffect, useState } from 'react';
import { fetchTrendingToday } from 'servises/moviesApi';
import { HomeTrend } from './Home.styleds';
import { Link } from 'react-router-dom';

export const Home = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    fetchTrendingToday().then(setTrending);
  }, []);

  return (
    <>
      <HomeTrend>
        <h1>Trending today</h1>
        <ul>
          {trending.map(({ original_title = 'Not relevant', id }) => (
            <li key={id}>
              <Link to={`movies/${id}`}> {original_title}</Link>
            </li>
          ))}
        </ul>
      </HomeTrend>
    </>
  );
};
