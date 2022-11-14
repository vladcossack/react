import { combineReducers } from 'redux';
import fetchMovieReducer from './fetchMovieReducer';
import { activeMovieReducer } from './activeMovieReducer';
import { activeGenreReducer } from './activeGenreReducer';
import sortingValueReducer from './sortingValueReducer';
import { searchingMovieReducer } from './searchingMovieReducer';

export default combineReducers({
  moviesData: fetchMovieReducer,
  activeMovie: activeMovieReducer,
  activeGenre: activeGenreReducer,
  sortingValue: sortingValueReducer,
  searchingMovie: searchingMovieReducer
});
