import React, { Component } from 'react';
import ReactGA from 'react-ga';

export default () => Page =>
  class extends Component {
    componentDidMount() {
      ReactGA.initialize('UA-9999999-1');
      ReactGA.pageview(window.location.pathname);
    }

    render() {
      return <Page {...this.props} />;
    }
  };
