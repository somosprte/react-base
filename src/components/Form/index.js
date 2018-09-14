import React, { Component } from 'react';

import Group from './Group';
import Input from './Input';
import Label from './Label';
import Button from './Button';

class Form extends Component {
  render() {
    return (
      <form {...this.props} className={this.props.className}>
        {this.props.children}
      </form>
    );
  }
}

Form.Group = Group;
Form.Input = Input;
Form.Label = Label;
Form.Button = Button;

export default Form;
