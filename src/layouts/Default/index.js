import React, { Component, Fragment } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { Topbar, Navbar, Footer } from './components';

export default Page =>
  class extends Component {
    state = {
      visible: false,
    };

    componentDidMount() {
      this.setState({ visible: true });
    }

    render() {
      return (
        <ReactCSSTransitionGroup transitionName="fade" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
          {this.state.visible && (
            <Fragment>
              <header id="topnav">
                <Topbar />
                <Navbar />
              </header>

              <div className="wrapper">
                <div className="container-fluid">
                  <Page {...this.props} />
                </div>
              </div>

              <Footer />
            </Fragment>
          )}
        </ReactCSSTransitionGroup>
      );
    }
  };
