import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import { Home } from 'pages/Home/Home';
import { Movies } from 'pages/Movies/Movies';
import { MovieDetails } from 'pages/MovieDetails/MovieDetails';
export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies/:moviesId" element={<MovieDetails />} />
          <Route path="movies" element={<Movies />}>
            <Route path="movies/:moviesId" element={<MovieDetails />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
