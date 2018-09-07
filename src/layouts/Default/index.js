import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

export default Page =>
  class extends Component {
    render() {
      return (
        <Fragment>
          <h1>Layout Default</h1>

          <ul>
            <li><Link to="/login">Login</Link></li>
          </ul>

          <Page {...this.props} />
        </Fragment>
      );
    }
  };
