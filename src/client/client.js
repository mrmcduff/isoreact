// We need to import babel-polyfill in order to use async/await syntax without regeneratorRuntime not defined error.
// Needs to be imported in the client and the server index files.
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import Routes from './Routes';
import reducers from './reducers';

// Args: reducers, initial state, result of applying middleware
const store = createStore(reducers, {}, applyMiddleware(thunk));

ReactDOM.hydrate(
  <Provider store={store} >
    <BrowserRouter>
      <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);
