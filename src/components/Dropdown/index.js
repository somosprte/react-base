import React, { Component } from 'react';

import Button from './Button';
import Menu from './Menu';

class Dropdown extends Component {
  state = {
    open: false,
  };

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleToggle = e => {
    e.preventDefault();

    this.setState({ open: !this.state.open });
  };

  handleClickOutside = e => {
    if (!this.node.contains(e.target)) {
      this.setState({ open: false });
    }
  };

  renderComponent(name) {
    return this.props.children.filter(children => children.type.name === name);
  }

  render() {
    return (
      <div className="dropdown" onBlur={this.handleClose} ref={node => (this.node = node)}>
        <a href="" {...this.renderComponent('Button')[0].props} onClick={this.handleToggle}>
          {this.renderComponent('Button')}
        </a>

        <div className={`dropdown-menu dropdown-menu-right ${this.state.open ? 'show' : ''}`}>
          {this.renderComponent('Menu')}
        </div>
      </div>
    );
  }
}

Dropdown.Button = Button;
Dropdown.Menu = Menu;

export default Dropdown;
