import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunkMiddleware),
    (typeof window !== 'undefined' && window.devToolsExtension) ? window.devToolsExtension() : f => f
  )
);

export default store;