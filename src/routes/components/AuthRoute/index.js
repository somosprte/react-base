import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { withLayout } from 'hocs';

class AuthRoute extends Component {
  render() {
    const RenderComponent = this.props.component;

    return <Route render={props => <RenderComponent {...props} />} />;
  }
}

export default withLayout('Auth')(AuthRoute);
