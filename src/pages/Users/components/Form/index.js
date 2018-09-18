import React, { Component } from 'react';

import { Form, Loading } from 'components';

class UserForm extends Component {
  state = {
    data: this.props.data,
  };

  handleChangeInput = e => {
    const { name, value } = e.target;
    this.setState({ data: { ...this.state.data, [name]: value } });

    Object.keys(this.props.errors).length && this.props.onValidate();
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.data);
  };

  render() {
    return (
      <Form action="" className="form-horizontal p-20" onSubmit={this.handleSubmit}>
        <Form.Group className="row">
          <Form.Label className="col-2">Nome Completo</Form.Label>
          <div className="col-10">
            <Form.Input
              name="name"
              value={this.state.data.name}
              onChange={this.handleChangeInput}
              errors={this.props.errors.name}
              focus={1}
            />
          </div>
        </Form.Group>

        <Form.Group className="row">
          <Form.Label className="col-2">Cargo</Form.Label>
          <div className="col-10">
            <Form.Input
              name="job"
              value={this.state.data.job}
              onChange={this.handleChangeInput}
              errors={this.props.errors.job}
            />
          </div>
        </Form.Group>

        <Form.Group className="row justify-content-end">
          <div className="col-10">
            <Form.Button type="submit" disabled={this.props.submiting}>
              {this.props.submiting ? <Loading /> : 'Salvar'}
            </Form.Button>
          </div>
        </Form.Group>
      </Form>
    );
  }
}

export default UserForm;
