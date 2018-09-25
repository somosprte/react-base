import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

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

        <ReactCSSTransitionGroup transitionName="fade" transitionEnterTimeout={150} transitionLeaveTimeout={150}>
          {this.state.open && (
            <div className={`dropdown-menu dropdown-menu-right show`}>{this.renderComponent('Menu')}</div>
          )}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

Dropdown.Button = Button;
Dropdown.Menu = Menu;

export default Dropdown;
