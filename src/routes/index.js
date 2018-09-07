import React from 'react';

import { Router, Switch, Route } from 'react-router-dom';
import { history } from './history';

import * as Pages from 'pages';

const Routes = () => (
  <Router history={history}>
    <Switch>a
      <Route path="/" component={Pages.Dashboard} exact />
      <Route path="/login" component={Pages.Auth.Login} exact />
    </Switch>
  </Router>
);

export default Routes;

