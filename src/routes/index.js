import React from 'react';

import { Router, Switch, Route } from 'react-router-dom';
import { history } from './history';

import * as Pages from 'pages';

import PrivateRoute from './PrivateRoute';

const Routes = () => (
  <Router history={history}>
    <Switch>
      {/* <Route path="/" component={Pages.Dashboard} exact /> */}
      <Route path="/login" component={Pages.Auth.Login} exact />

      {/* Require authentication to access */}
      <PrivateRoute path="/" component={Pages.Dashboard} exact />
      <PrivateRoute path="/products" component={Pages.Products.List} exact />
    </Switch>
  </Router>
);

export default Routes;

