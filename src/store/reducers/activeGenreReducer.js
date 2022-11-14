import { SET_ACTIVE_GENRE } from '../actions/actionTypes';

const initialState = {
  title: 'all'
};

export const activeGenreReducer = (state = initialState, action) => {
  switch (action.type) {
  case SET_ACTIVE_GENRE:
    return {
      ...state,
      title: action.payload,
    };

  default:
    return state;
  }
};