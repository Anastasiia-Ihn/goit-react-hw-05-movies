import { fetchData } from 'API/api';
import { ListTrends } from 'components/ListTrends/ListTrends';
import { useEffect, useState } from 'react';

// const fetch = async () => await fetchData();

export default function HomePage() {
  const [arrMovies, setArrMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const movies = await fetchData();
        
        setArrMovies(movies.results);
      } catch (error) {
        console.log('err');
      }
    }
    fetchMovies();

    // return () => {};
  }, []);

  return (
    <>
      <h1>Welcome!</h1>
      <ListTrends list={arrMovies}></ListTrends>
   
    </>
  );
}
