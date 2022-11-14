// для уникальности типов экшенов, область видимости экшенов, можно прописать путь так как он уникальный
const SUCCESS_FETCH_MOVIE = '@store/actions/SUCCESS_FETCH_MOVIE';
const REQUEST_FETCH_MOVIE = '@store/actions/REQUEST_FETCH_MOVIE';
const FAIL_FETCH_MOVIE = '@store/actions/FAIL_FETCH_MOVIE';

const REQUEST_ADD_MOVIE = '@store/actions/REQUEST_ADD_MOVIE';
const SUCCESS_ADD_MOVIE = '@store/actions/SUCCESS_ADD_MOVIE';
const FAIL_ADD_MOVIE = '@store/actions/FAIL_ADD_MOVIE';

const REQUEST_EDIT_MOVIE = '@store/actions/REQUEST_EDIT_MOVIE';
const SUCCESS_EDIT_MOVIE = '@store/actions/SUCCESS_EDIT_MOVIE';
const FAIL_EDIT_MOVIE = '@store/actions/FAIL_EDIT_MOVIE';

const SET_ACTIVE_MOVIE = '@store/actions/SET_ACTIVE_MOVIE';
const SET_ACTIVE_GENRE = '@store/actions/SET_ACTIVE_GENRE';
const SET_SORTING_VALUE = '@store/actions/SET_SORTING_VALUE';
const SET_SEARCHING_MOVIE = '@store/actions/SET_SEARCHING_MOVIE';

export {
  SUCCESS_FETCH_MOVIE,
  REQUEST_FETCH_MOVIE,
  FAIL_FETCH_MOVIE,
  REQUEST_ADD_MOVIE,
  SUCCESS_ADD_MOVIE,
  FAIL_ADD_MOVIE,
  REQUEST_EDIT_MOVIE,
  SUCCESS_EDIT_MOVIE,
  FAIL_EDIT_MOVIE,
  SET_ACTIVE_MOVIE,
  SET_ACTIVE_GENRE,
  SET_SORTING_VALUE,
  SET_SEARCHING_MOVIE
};