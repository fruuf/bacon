import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Dashboard from '/components/Dashboard';

export default () => (
  <Router history={browserHistory}>
    <Route path="/">
      <IndexRoute component={Dashboard} />
    </Route>
  </Router>
);
