import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestMovies, successMovies, failMovies } from '../../store/actions/actionCreators';
import { moviesList } from '../../store/selectors';
import axios from 'axios';

import { MoviesSection, Navigation, MoviesWrapper } from '../styled.js';
import MovieCard from '../MovieCard';
import Categories from '../Categories';
import SearchResults from '../SearchResults';
import Sorting from '../Sorting';

const MoviesList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestMovies());
    axios
    // which port better use as db ?
      .get('http://localhost:3333/movies')
      .then(movies => dispatch(successMovies(movies.data)))
      .catch(() => dispatch(failMovies()));
  }, []);

  const movies = useSelector(moviesList);
  const moviesCount = movies.length;
  // console.log('movies', movies);

  return (
    <MoviesSection className='content'>
      <Navigation className='container'>
        <Categories />
        <Sorting />
      </Navigation>
      <SearchResults count={moviesCount} />
      <MoviesWrapper className='container'>
        {movies.length ? movies.map((movie) =>
          <MovieCard
            title={movie.title}
            id={movie.id}
            genre={movie.tagline}
            genresList={movie.genres.join(', ')}
            year={movie.release_date}
            photo={movie.poster_path}
            description={movie.overview}
            duration={`${movie.runtime} min`}
            raiting={movie.vote_average}
            key={movie.id}
          /> 
        ) : <div>Not Found Component</div>}
      </MoviesWrapper>
    </MoviesSection>
  );
};

export default MoviesList;