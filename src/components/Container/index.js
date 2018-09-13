import React, { Component } from 'react';

class Container extends Component {
  render() {
    return <div className="card-box">{this.props.children}</div>;
  }
}

export default Container;
