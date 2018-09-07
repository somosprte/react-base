import React, { Component } from 'react';
import { compose } from 'recompose';

import { Link } from 'react-router-dom';

import { withLayout } from 'hocs';

class Login extends Component {
  render() {
    return (
      <div>
        <h2>Login</h2>

        <Link to="/">Dashboard</Link>
      </div>
    );
  }
}

export default compose(withLayout('Blank'))(Login);
