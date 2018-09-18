import React, { Component } from 'react';

class Label extends Component {
  render() {
    return <label {...this.props}>{this.props.children}</label>;
  }
}

export default Label;
