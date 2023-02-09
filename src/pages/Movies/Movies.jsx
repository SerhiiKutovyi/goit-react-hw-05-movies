import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { MoviesStyleds } from './Movies.styleds';
import { fetchMovieName } from 'services/moviesApi';
import { toast } from 'react-toastify';

const Movies = () => {
  const [inputValue, setInputValue] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const moviname = searchParams.get('movie') ?? '';

  useEffect(() => {
    if (!moviname) {
      return;
    }
    fetchMovieName(moviname).then(data => {
      if (data.length === 0) {
        toast.error('Please enter the correct movie title!');
      } else {
        setInputValue(data);
      }
    });
  }, [moviname]);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;

    setSearchParams(
      form.elements.movie.value !== ''
        ? { movie: form.elements.movie.value }
        : {}
    );
    form.reset();
  };

  return (
    <MoviesStyleds>
      <form onSubmit={handleSubmit}>
        <input type="text" name="movie" />
        <button type="submit">Search</button>
      </form>

      <>
        <ul>
          {inputValue.map(({ original_title = 'Not relevant', id }) => (
            <li key={id}>
              <Link to={`${id}`} state={{ from: location }}>
                {original_title}
              </Link>
            </li>
          ))}
        </ul>
      </>
    </MoviesStyleds>
  );
};

export default Movies;
