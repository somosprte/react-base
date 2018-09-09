import React, { Component } from 'react';

class Label extends Component {
  static defaultProps = {
    text: null,
  };

  render() {
    return <label {...this.props}>{this.props.text}</label>;
  }
}

export default Label;
