import React, { Component } from 'react';

class Panel extends Component {
  render() {
    return <div className="card-box">{this.props.children}</div>;
  }
}

export default Panel;
