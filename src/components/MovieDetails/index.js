import React from 'react';
import { useSelector } from 'react-redux';
import { movieId, moviesList } from '../../store/selectors';
import {
  MovieDetailsBackground,
  MovieDetailsWrapper,
  MovieDetailsContent,
  MovieDetailsTitle,
  MovieDetailsTitleWrap,
  MovieDetailsRaiting,
  MovieDurationAndYear,
  MovieDetailsBlock,
  MovieDetailsImg
} from '../styled.js';
import Logo from '../../assets/img/logo.svg';
import MovieDetailsSearch from '../MovieDetailsSearch';

const MovieDetails = () => {
  const activeMovieId = useSelector(movieId);
  const movieDataList = useSelector(moviesList);
  const movieData = movieDataList.find(movie => movie.id === activeMovieId) || {};
  const showDetails = activeMovieId && movieDataList.length;

  return (
    <div className='show' >
      <MovieDetailsBackground />
      {showDetails &&
        (<MovieDetailsBlock>
          <div className='container'>
            <Logo />
            <MovieDetailsSearch />
            <MovieDetailsWrapper>
              <div>
                <MovieDetailsImg src={movieData.poster_path} />
              </div>
              <MovieDetailsContent>
                <MovieDetailsTitleWrap>
                  <MovieDetailsTitle>{movieData.title}</MovieDetailsTitle>
                  <MovieDetailsRaiting>{movieData.vote_average}</MovieDetailsRaiting>
                </MovieDetailsTitleWrap>
                <p>{movieData.tagline}</p>
                <MovieDurationAndYear>
                  <span>{movieData.release_date && movieData.release_date.split('-')[0]}</span>
                  <span>{movieData.runtime} min</span>
                </MovieDurationAndYear>
                <p>{movieData.overview}</p>
              </MovieDetailsContent>
            </MovieDetailsWrapper>
          </div>
        </MovieDetailsBlock>)
      }
    </div>
  );
};
export default MovieDetails;

