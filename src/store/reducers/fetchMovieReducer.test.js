import fetchMoviesReduser from '../reducers/fetchMovieReducer';
import * as ActionCreators from '../actions/actionCreators';

describe('fetchMovies reducer', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
        movies: [],
        loading: false,
        error: false
      };
  })

  it('should return initial state if action is not recognized', () => {
    expect(fetchMoviesReduser(initialState, {})).toEqual(initialState);
  })


  it('should return state with error if action is FAIL_FETCH_MOVIE', () => {
    const error = true;
    const newState = fetchMoviesReduser(initialState, ActionCreators.failMovies(error));
    expect(newState).toEqual({
      ...initialState,
      error
    });
  })

  it('should return state with movies and false error if action is SUCCESS_FETCH_MOVIE', () => {
    const movies = [{id: 1, title: 'Iron Man'}];
    const newState = fetchMoviesReduser(initialState, ActionCreators.successMovies(movies));
    expect(newState).toEqual({
      ...initialState,
      movies
    });
  })

}) 