import React from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '../SearchIcon';

const MovieDetailsSearch = () => {
  return (
    <Link to="/">
      <SearchIcon />
    </Link>
  );
};

export default MovieDetailsSearch;