import React, { Component, Fragment } from 'react';

export default Page =>
  class extends Component {
    render() {
      return (
        <Fragment>
          <h1>Layout Blank</h1>

          <Page {...this.props} />
        </Fragment>
      );
    }
  };
