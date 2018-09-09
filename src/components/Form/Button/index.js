import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
      <button
        className="btn btn-success"
        {...this.props}
      >
        {this.props.children}
      </button>
    )
  }
}

export default Button;
