// import { useSearchParams } from 'react';
// import { fetchMovieName } from 'servises/moviesApi';

export const Movies = () => {
  // const [inputValue, setInputValue] = useState(null);
  // const [searchParams, setSearchParams] = useSearchParams();
  const moviename = searchParams.get('movie');

  // useEffect(() => {
  //   fetchMovieName();
  // }, []);

  // const handleSubmit = event => {
  //   event.preventDefault();

  //   const form = event.target;
  //   setSearchParams({ movie: form.elements.movie.value });
  //   form.reset();
  // };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="movie" />
        <button type="submit">Search</button>
      </form>
      <p>Hello movies!</p>
    </>
  );
};
