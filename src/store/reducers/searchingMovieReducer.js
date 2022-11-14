import { SET_SEARCHING_MOVIE } from '../actions/actionTypes';

const initialState = {
  movieTitle: ''
};

export const searchingMovieReducer = (state = initialState, action) => {
  switch (action.type) {
  case SET_SEARCHING_MOVIE:
    return {
      ...state,
      movieTitle: action.payload,
    };

  default:
    return state;
  }
};