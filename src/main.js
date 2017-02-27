/* global window */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import ducks from './ducks';
import routes from './routes';

// use redux devtools if available
// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// we want redux-thunk for async dispatching
const enhancer = composeEnhancers(applyMiddleware(thunk));

// create the redux store, use state from previous store if available
const store = createStore(ducks, enhancer);

// render the app to the DOM
const renderApp = root =>
  render(
    React.createElement(Provider, { store }, React.createElement(root)),
    document.getElementById('render'),
  );

// do the initial render
renderApp(routes);

// allow hot reloading while preserving the app state
if (module.hot) {
  module.hot.accept('./routes', () => {
    const newRoutes = require('./routes').default;
    renderApp(newRoutes);
  });
}
