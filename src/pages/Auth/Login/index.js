import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { compose } from 'recompose';
import { withLayout } from 'hocs';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as AuthActions } from 'store/ducks/auth';

import { Validate } from 'common';
import { Form, Container } from 'components';

class Login extends Component {
  state = {
    form: {
      email: '',
      password: '',
    },
    errors: {},
  };

  handleChangeInput = e => {
    const { name, value } = e.target;
    this.setState({ form: { ...this.state.form, [name]: value } });

    Object.keys(this.state.errors).length && this.handleValidate();
  };

  handleValidate = () => {
    const { form } = this.state;

    const rules = {
      email: {
        presence: true,
        email: true,
      },

      password: {
        presence: true,
        length: {
          minimum: 6,
        },
      },
    };

    const validate = Validate(form, rules);
    this.setState({ errors: validate.errors });

    return validate.valid;
  };

  handleSubmit = e => {
    e.preventDefault();

    if (!this.handleValidate()) return null;

    this.props.loginRequest(this.state.form);
  };

  render() {
    return (
      <Container>
        <form className="form-horizontal m-t-20" action="index.html" onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Input
              name="email"
              placeholder="E-mail"
              value={this.state.form.email}
              onChange={this.handleChangeInput}
              errors={this.state.errors.email}
            />
          </Form.Group>

          <Form.Group>
            <Form.Input
              name="password"
              type="password"
              placeholder="Senha"
              value={this.state.form.password}
              onChange={this.handleChangeInput}
              errors={this.state.errors.password}
            />
          </Form.Group>

          <Form.Group>
            <Form.Button className="btn btn-custom btn-bordred btn-block" type="submit">
              Login
            </Form.Button>
          </Form.Group>

          <Form.Group className="m-b-0">
            <div className="row">
              <div className="col-6">
                <Link to="/" className="text-muted">
                  <i className="fa fa-lock m-r-5" /> Esqueceu sua senha?
                </Link>
              </div>

              <div className="col-6 text-right">
                <Link to="/" className="text-primary">
                  Registre-se
                </Link>
              </div>
            </div>
          </Form.Group>
        </form>
      </Container>
    );
  }
}

const mapState = state => ({
  auth: state.auth,
});

const mapActions = dispatch => bindActionCreators(AuthActions, dispatch);

export default compose(
  connect(
    mapState,
    mapActions,
  ),
  withLayout('Auth'),
)(Login);
