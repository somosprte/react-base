import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Title from './Title';

class Page extends Component {
  state = {
    visible: false,
  };

  componentDidMount() {
    this.setState({ visible: true });
  }

  render() {
    return (
      <ReactCSSTransitionGroup transitionName="slideUp" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
        {this.state.visible && <div id="page">{this.props.children}</div>}
      </ReactCSSTransitionGroup>
    );
  }
}

Page.Title = Title;

export default Page;
