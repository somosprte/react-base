import React from 'react';

import { Router, Switch, Route } from 'react-router-dom';
import { history } from './history';

import * as Pages from 'pages';

import { AuthRoute, PrivateRoute } from './components';

const Routes = () => (
  <Router history={history}>
    <Switch>
      {/* <Route path="/" component={Pages.Dashboard} exact /> */}
      <AuthRoute path="/login" component={Pages.Auth.Login} exact />
      <AuthRoute path="/register" component={Pages.Auth.Register} exact />
      <AuthRoute path="/recover-password" component={Pages.Auth.RecoverPassword} exact />

      {/* Require authentication to access */}
      <PrivateRoute path="/" component={Pages.Dashboard} exact />
      <PrivateRoute path="/users" component={Pages.Users.List} exact />
      <PrivateRoute path="/users/create" component={Pages.Users.Create} exact />
      <PrivateRoute path="/users/:id/edit" component={Pages.Users.Edit} exact />

      <PrivateRoute path="/examples/icons" component={Pages.Examples.Icons} exact />
      <PrivateRoute path="/examples/components" component={Pages.Examples.Components} exact />
      <PrivateRoute path="/examples/teste" component={Pages.Examples.Teste} exact />

      <Route component={Pages.Errors.NotFound} />
    </Switch>
  </Router>
);

export default Routes;
