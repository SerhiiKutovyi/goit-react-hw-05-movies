import axios from 'axios';

const KEY = '2fdffbc73ca59cbf450fa0d66de3e7b7';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const TRENDING = '/trending/all/day';

export async function fetchTrendingToday() {
  const response = await axios(TRENDING, {
    params: {
      api_key: KEY,
      media_type: 'all',
      time_window: 'day',
    },
  });
  console.log(response.data.results);

  return response.data.results;
}
