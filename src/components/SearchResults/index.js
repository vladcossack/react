import React from 'react';
import { SearchResults, MoviesAmount } from '../styled.js';

const TotalMoviesAmount = ({ count }) => {
  return (
    <SearchResults className='container'>
      <MoviesAmount>{count} </MoviesAmount>
    movies found
    </SearchResults>
  );
};

export default TotalMoviesAmount;