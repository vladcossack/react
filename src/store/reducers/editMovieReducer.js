import {
  REQUEST_EDIT_MOVIE,
  SUCCESS_EDIT_MOVIE,
  FAIL_EDIT_MOVIE,
} from '../actions/actionTypes';
    
const initialState = {
  movie: {},
  loading: false,
  error: false
};
      
export const editMovieReducer = (state = initialState, action) => {
  switch (action.type) {
  case SUCCESS_EDIT_MOVIE:
    return {
      ...state,
      loading: false,
      error: false,
      movie: action.payload,
    };
    
  case REQUEST_EDIT_MOVIE:
    return {
      ...state,
      loading: true,
    };
    
  case FAIL_EDIT_MOVIE:
    return {
      ...state,
      error: true
    };
    
  default:
    return state;
  }
};