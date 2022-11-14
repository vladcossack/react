import {
  REQUEST_ADD_MOVIE,
  SUCCESS_ADD_MOVIE,
  FAIL_ADD_MOVIE,
  REQUEST_EDIT_MOVIE,
  SUCCESS_EDIT_MOVIE,
  FAIL_EDIT_MOVIE,
  DELETE_MOVIE,
  SUCCESS_FETCH_MOVIE,
  REQUEST_FETCH_MOVIE,
  FAIL_FETCH_MOVIE,
  SET_ACTIVE_MOVIE,
  SET_ACTIVE_GENRE,
  SET_SORTING_VALUE, 
  SET_SEARCHING_MOVIE
} from './actionTypes';

const addMovie = () => ({ type: REQUEST_ADD_MOVIE });
const successAdd = () => ({ type: SUCCESS_ADD_MOVIE });
const failAdd = () => ({ type: FAIL_ADD_MOVIE });

const editMovie = (payload) => ({ type: REQUEST_EDIT_MOVIE, payload });
const successEdit = (payload) => ({ type: SUCCESS_EDIT_MOVIE, payload });
const failEdit = (payload) => ({ type: FAIL_EDIT_MOVIE, payload });

const deleteMovie = (movie) => ({ type: DELETE_MOVIE, payload: movie });

const requestMovies = (payload) => ({type: REQUEST_FETCH_MOVIE, payload}); 
const successMovies = (payload) => ({type: SUCCESS_FETCH_MOVIE, payload}); 
const failMovies = () => ({type: FAIL_FETCH_MOVIE});
 
const setActiveMovie = (payload) => ({type: SET_ACTIVE_MOVIE, payload});
const setActiveGenre = (payload) => ({type: SET_ACTIVE_GENRE, payload});
const setSortingValue = (payload) => ({type: SET_SORTING_VALUE, payload});
const setSearchingMovie = (payload) => ({type: SET_SEARCHING_MOVIE, payload});

export {
  addMovie,
  successAdd,
  failAdd,
  editMovie,
  successEdit,
  failEdit,
  deleteMovie,
  requestMovies,
  successMovies,
  failMovies,
  setActiveMovie,
  setActiveGenre,
  setSortingValue,
  setSearchingMovie
};
