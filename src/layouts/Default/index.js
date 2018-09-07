import React, { Component, Fragment } from 'react';

import { Header } from './components'

export default Page =>
  class extends Component {
    render() {
      return (
        <Fragment>
          <Header />

          <Page {...this.props} />
        </Fragment>
      );
    }
  };
