import {
  SUCCESS_FETCH_MOVIE,
  REQUEST_FETCH_MOVIE,
  FAIL_FETCH_MOVIE
} from '../actions/actionTypes';

const initialState = {
  movies: [],
  loading: false,
  error: false
};
  
const fetchMovieReducer = (state = initialState, action) => {
  switch (action.type) {
  case SUCCESS_FETCH_MOVIE:
    return {
      ...state,
      loading: false,
      error: false,
      movies: action.payload,
    };

  case REQUEST_FETCH_MOVIE:
    return {
      ...state,
      loading: true,
    };

  case FAIL_FETCH_MOVIE:
    return {
      ...state,
      error: true
    };

  default:
    return state;
  }
};

export default fetchMovieReducer;