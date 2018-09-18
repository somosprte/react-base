import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { compose } from 'recompose';
import { withLayout } from 'hocs';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as AuthActions } from 'store/ducks/auth';

import { LoadingScreen } from 'components';

class PrivateRoute extends Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    this.props.getAuthUserRequest();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.auth.user.loading && !nextProps.auth.user.loading) {
      this.setState({ loading: false });
    }
  }

  render() {
    const RenderComponent = this.props.component;
    const auth = this.props.auth;

    return this.state.loading ? (
      <LoadingScreen />
    ) : (
      <Route render={props => (auth.user.data.id ? <RenderComponent {...props} /> : <Redirect to="/login" />)} />
    );
  }
}

const mapState = state => ({
  auth: state.auth,
});

const mapActions = dispatch => bindActionCreators(AuthActions, dispatch);

export default compose(connect(
  mapState,
  mapActions,
), withLayout())(PrivateRoute);
