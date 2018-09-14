import React, { Component } from 'react';

class Group extends Component {
  render() {
    return <div {...this.props} className={`form-group ${this.props.className}`} >{this.props.children}</div>;
  }
}

export default Group;
