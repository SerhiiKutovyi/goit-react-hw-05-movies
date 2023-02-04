import axios from 'axios';

const KEY = '2fdffbc73ca59cbf450fa0d66de3e7b7';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const TRENDING = `/trending/all/day`;

export async function fetchTrendingToday() {
  const response = await axios(TRENDING, {
    params: {
      api_key: KEY,
    },
  });

  return response.data.results;
}

export async function fetchMovieDetailsById(id) {
  const response = await axios(`/movie/${id}`, {
    params: {
      api_key: KEY,
    },
  });

  return response.data;
}
