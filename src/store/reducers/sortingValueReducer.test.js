import sortingValueReducer from '../reducers/sortingValueReducer';
import * as ActionCreators from '../actions/actionCreators';

describe('sortingValueReducer reducer', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
        sortingBy: 'release_date'
    };
  })

  it('should return initial state if action is not recognized', () => {
    expect(sortingValueReducer(initialState, {})).toEqual(initialState);
  })

  it('should return state with updated sortingBy if action is SET_SORTING_VALUE', () => {
    const newSortBy = 'title';
    expect(sortingValueReducer(initialState, ActionCreators.setSortingValue(newSortBy))).toEqual({
      ...initialState,
      sortingBy: newSortBy
    });
  })
}) 