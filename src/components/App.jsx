import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Movies from '../pages/Movies';
// import MovieById from '../pages/MovieById';

import { Navigation } from './Navigation';

export const App = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          {/* <Route path="/movies/:movieById" element={<MovieById />} /> */}
        </Routes>
      </div>
    </>
  );
};
