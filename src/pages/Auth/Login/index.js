import React, { Component } from 'react';
import { compose } from 'recompose';
import { withLayout } from 'hocs';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as AuthActions } from 'store/ducks/auth';

import { Panel } from 'components';
import { Username, Password } from './components';

class Login extends Component {
  render() {
    return <Panel>{this.props.auth.authenticate.data.id ? <Password /> : <Username />}</Panel>;
  }
}

const mapState = state => ({
  auth: state.auth,
});

const mapActions = dispatch => bindActionCreators(AuthActions, dispatch);

export default compose(
  connect(
    mapState,
    mapActions,
  ),
  withLayout('Auth'),
)(Login);
