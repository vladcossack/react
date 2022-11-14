import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';

import App from '../src/components/App';

ReactDOM.hydrate(
  <App Router={BrowserRouter} />,
  document.getElementById('app'),
);

// import React from 'react';
// import { render } from 'react-dom';
// import App from './components/App.js';
// import './index.scss';

// render(
//   <App />,
//   document.getElementById('app')
// ); 