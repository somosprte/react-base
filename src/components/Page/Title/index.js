import React, { Component } from 'react';

class Title extends Component {
  render() {
    return (
      <div className="page-title" {...this.props}>
        {this.props.children}
      </div>
    );
  }
}

export default Title;
