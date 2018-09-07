import React, { Component } from 'react';
import { compose } from 'recompose';

import { Link } from 'react-router-dom';

import { withLayout } from 'hocs';

import { Container } from './styles';

class Login extends Component {
  render() {
    return (
      <Container color="#F00">
        <h2>Login</h2>

        <Link to="/">Dashboard</Link>
      </Container>
    );
  }
}

export default compose(withLayout('Blank'))(Login);
