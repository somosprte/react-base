import React, { Component, Fragment } from 'react';

import { Topbar, Navbar, Footer } from './components'

export default Page =>
  class extends Component {
    render() {
      return (
        <Fragment>
          <header id="topnav">
            <Topbar />
            <Navbar />
          </header>

          <Page {...this.props} />

          <Footer />
        </Fragment>
      );
    }
  };
