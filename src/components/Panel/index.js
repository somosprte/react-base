import React, { Component } from 'react';

import Title from './Title';

class Panel extends Component {
  render() {
    return <div className="card-box">{this.props.children}</div>;
  }
}

Panel.Title = Title;

export default Panel;
