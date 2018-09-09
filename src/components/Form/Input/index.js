import React, { Component } from 'react';

class Input extends Component {
  render() {
    return <input type="text" className="form-control" {...this.props} />;
  }
}

export default Input;
