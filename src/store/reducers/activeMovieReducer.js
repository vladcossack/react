import { SET_ACTIVE_MOVIE } from '../actions/actionTypes';

const initialState = {
  id: null
};

export const activeMovieReducer = (state = initialState, action) => {
  switch (action.type) {
  case SET_ACTIVE_MOVIE:
    return {
      ...state,
      id: action.payload,
    };

  default:
    return state;
  }
};
