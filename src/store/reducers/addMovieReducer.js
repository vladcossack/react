import {
  REQUEST_ADD_MOVIE,
  SUCCESS_ADD_MOVIE,
  FAIL_ADD_MOVIE
} from '../actions/actionTypes';
  
const initialState = {
  movie: {},
  loading: false,
  error: false
};
    
export const addMovieReducer = (state = initialState, action) => {
  switch (action.type) {
  case SUCCESS_ADD_MOVIE:
    return {
      ...state,
      loading: false,
      error: false
    };
  
  case REQUEST_ADD_MOVIE:
    return {
      ...state,
      loading: true,
    };
  
  case FAIL_ADD_MOVIE:
    return {
      ...state,
      error: true
    };
  
  default:
    return state;
  }
};