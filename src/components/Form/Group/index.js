import React, { Component } from 'react';

class Group extends Component {
  render() {
    return <div className="form-group">{this.props.children}</div>;
  }
}

export default Group;
