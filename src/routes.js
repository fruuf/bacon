import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Home from '/components/Home';


export default () => (
  <Router history={browserHistory}>
    <Route path="/">
      <IndexRoute component={Home} />
    </Route>
  </Router>
);
