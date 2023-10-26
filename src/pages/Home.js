import { fetchData } from 'API/api';
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
      <div>
        {' '}
        {console.log(arrMovies)}
        {arrMovies &&
          arrMovies.map(el => (
            <div key={el.id}>
              {<img src={el.poster_path} alt={el.original_title}></img>}
              {el.title}
            </div>
          ))}
      </div>
    </>
  );
}
