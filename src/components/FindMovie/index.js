import React, {useCallback, useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setSearchingMovie } from '../../store/actions/actionCreators';
import { Title, SearchForm, SearchInput, SearchBtn } from '../styled.js';

const SearchMovieSection = () => {
  const dispatch = useDispatch();
  const [movieName, setMovieName] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const searchedMovie = urlParams.get('name');
    setMovieName(searchedMovie || '');
  },[]);

  const handleClick = useCallback(() => {
    dispatch(setSearchingMovie(movieName.toLowerCase()));
  }, [dispatch, movieName]);

  const handleChange = (e) => {
    e.preventDefault();
    e.persist();
    setMovieName(e.target.value.toLowerCase());
  };

  return (
    <div className='find-movie-wrapper'>
      <Title>FIND YOUR MOVIE</Title>
      <SearchForm>
        <SearchInput
          value={movieName}
          placeholder='What do you want to watch?'
          onChange={handleChange} />
        <SearchBtn
          as={Link}
          to={`/search?name=${movieName}`}
          onClick={handleClick}
        >
          SEARCH
        </SearchBtn>
      </SearchForm>
    </div>
  );
};

export default SearchMovieSection;