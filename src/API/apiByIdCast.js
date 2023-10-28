import axios from 'axios';

const key = '84201912ed7e3ce22261b9e0387010b4';
const BASE_URL = 'https://api.themoviedb.org/3/movie';

export const fetchDataByIdForCast = async movieId => {
  const params = new URLSearchParams({
    language: 'en-US',
    api_key: key,
  });
  const resp = await axios.get(`${BASE_URL}/${movieId}/credits?${params}`);
 console.log(resp);
 
    return resp.data.cast;
};
