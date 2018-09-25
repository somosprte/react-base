import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as AuthActions } from 'store/ducks/auth';

import { Validate } from 'common';
import { Panel, Form, Loading } from 'components';

class Register extends Component {
  state = {
    form: {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
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
      name: {
        required: true,
      },

      email: {
        required: true,
        email: true,
      },

      password: {
        required: true,
        length: {
          min: 6,
        },
      },

      password_confirmation: {
        required: true,
        length: {
          min: 6,
        },
        equality: {
          attribute: "password",
          message: "^As senhas não coincidem.",
          comparator: function(v1, v2) {
            return JSON.stringify(v1) === JSON.stringify(v2);
          }
        }
      },
    };

    const validate = Validate(form, rules);
    this.setState({ errors: validate.errors });

    return validate.valid;
  };

  handleSubmit = e => {
    e.preventDefault();

    if (!this.handleValidate()) return null;

    this.props.registerRequest(this.state.form);
  };

  render() {
    return (
      <Panel>
        <h4 className="text-uppercase font-bold mb-0 text-center">Criar Conta</h4>
        <h5 className="mb-0 text-muted text-center">Registre-se para acessar o painel</h5>
        <Form className="form-horizontal m-t-20 p-20" onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Input
              name="name"
              placeholder="Nome Completo"
              value={this.state.form.name}
              onChange={this.handleChangeInput}
              errors={this.state.errors.name}
              focus={1}
            />
          </Form.Group>

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
              type="password"
              name="password"
              placeholder="Senha"
              value={this.state.form.password}
              onChange={this.handleChangeInput}
              errors={this.state.errors.password}
            />
          </Form.Group>

          <Form.Group>
            <Form.Input
              type="password"
              name="password_confirmation"
              placeholder="Confirmar Senha"
              value={this.state.form.password_confirmation}
              onChange={this.handleChangeInput}
              errors={this.state.errors.password_confirmation}
            />
          </Form.Group>

          <Form.Group className="m-t-40">
            <div className="row align-items-center">
              <div className="col-6">
                <Link to="/login" className="text-muted">
                  Voltar
                </Link>
              </div>

              <div className="col-6">
                <Form.Button
                  className="btn btn-custom btn-block"
                  type="submit"
                  disabled={this.props.auth.register.loading}
                >
                  {this.props.auth.register.loading ? (
                    <Loading type="btn" size="small" text="Registrando..." />
                  ) : (
                    'Registrar'
                  )}
                </Form.Button>
              </div>
            </div>
          </Form.Group>
        </Form>
      </Panel>
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
)(Register);
