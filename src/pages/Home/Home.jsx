import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HomeTrend } from './Home.styleds';
import { fetchTrendingToday } from 'services/moviesApi';

const Home = () => {
  const [trending, setTrending] = useState([]);
  const location = useLocation();

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
              <Link state={{ from: location }} to={`movies/${id}`}>
                {original_title}
              </Link>
            </li>
          ))}
        </ul>
      </HomeTrend>
    </>
  );
};

export default Home;
