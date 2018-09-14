import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as AuthActions } from 'store/ducks/auth';

import { Validate } from 'common';
import { Form, Loading } from 'components';

class Password extends Component {
  state = {
    form: {
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
      password: {
        presence: true,
      },
    };

    const validate = Validate(form, rules);
    this.setState({ errors: validate.errors });

    return validate.valid;
  };

  handleSubmit = e => {
    e.preventDefault();

    if (!this.handleValidate()) return null;

    this.props.loginRequest({
      username: this.props.auth.authenticate.document,
      password: this.state.form.password,
    });
  };

  render() {
    return (
      <Fragment>
        <h4 className="text-uppercase font-bold text-center">
          Olá, {this.props.auth.authenticate.data.attributes.name}
        </h4>
        <h5 className="mb-0 text-muted text-center">Entre com a senha para conectar ao painel.</h5>

        <Form className="form-horizontal m-t-20 p-20" onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Input
              type="password"
              name="password"
              placeholder="Senha"
              value={this.state.form.password}
              onChange={this.handleChangeInput}
              errors={this.state.errors.password}
              focus={1}
            />
          </Form.Group>

          <Form.Group className="m-t-40 m-b-0">
            <div className="row align-items-center">
              <div className="col-6">
                <Link to="/" className="text-muted">
                  Esqueceu sua senha?
                </Link>
              </div>

              <div className="col-6">
                <Form.Button
                  className="btn btn-custom btn-block"
                  type="submit"
                  disabled={this.props.auth.login.loading}
                >
                  {this.props.auth.login.loading ? <Loading /> : 'Login'}
                </Form.Button>
              </div>
            </div>
          </Form.Group>
        </Form>
      </Fragment>
    );
  }
}

const mapState = state => ({
  auth: state.auth,
});

const mapActions = dispatch => bindActionCreators(AuthActions, dispatch);

export default connect(
  mapState,
  mapActions,
)(Password);
