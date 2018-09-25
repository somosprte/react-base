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
      <Form action="" className="form form-horizontal p-20" onSubmit={this.handleSubmit}>
        <Form.Group className="row">
          <Form.Label className="col-2">Avatar</Form.Label>
          <div className="col-10">
            <Form.Input.Image
              name="avatar"
              type="avatar"
              preview="https://africageographic.com/wp-content/uploads/2018/03/%C2%A9Benjamin_Ackerman_scotia_female_exeter.jpg"
              value={this.state.data.avatar}
              onChange={this.handleChangeInput}
            />
          </div>
        </Form.Group>

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
              {this.props.submiting ? <Loading type="btn" size="small" text="Salvando..." /> : 'Salvar'}
            </Form.Button>
          </div>
        </Form.Group>
      </Form>
    );
  }
}

export default UserForm;
