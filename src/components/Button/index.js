import React, { Component } from 'react';

class Button extends Component {
  static defaultProps = {
    type: 'primary',
  };

  render() {
    return (
      <button {...this.props} className={`btn btn-${this.props.type} ${this.props.className}`}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;
