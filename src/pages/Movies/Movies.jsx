import { useSearchParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { MoviesStyleds } from './Movies.styleds';
import { fetchMovieName } from 'servises/moviesApi';

export const Movies = () => {
  const [inputValue, setInputValue] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const moviname = searchParams.get('movie') ?? '';

  useEffect(() => {
    if (moviname !== '' && moviname !== null)
      fetchMovieName(moviname).then(setInputValue);
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
              <Link to={`${id}`}> {original_title}</Link>
            </li>
          ))}
        </ul>
      </>
    </MoviesStyleds>
  );
};
