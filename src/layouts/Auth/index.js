import React, { Component, Fragment } from 'react';

import './styles.scss';

export default Page =>
  class extends Component {
    render() {
      return (
        <Fragment>
          <div className="account-pages">
            <div className="clearfix" />

            <div className="wrapper-page">
              <div className="text-center">
                <a href="index.html" className="logo">
                  Imagem da Logo
                </a>
              </div>

              <Page {...this.props} />
            </div>
          </div>
        </Fragment>
      );
    }
  };
