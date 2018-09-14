import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import CPF from 'gerador-validador-cpf';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as AuthActions } from 'store/ducks/auth';

import { Validate } from 'common';
import { Form, Loading } from 'components';

class Username extends Component {
  state = {
    form: {
      document: '',
    },
    errors: {},
  };

  handleChangeDocument = value => {
    this.setState({ form: { ...this.state.form, document: value } });

    Object.keys(this.state.errors).length && this.handleValidate();
  };

  handleValidate = () => {
    const { form } = this.state;

    const rules = {
      document: {
        cpf: true,
      },
    };

    const validate = Validate(form, rules);
    this.setState({ errors: validate.errors });

    return validate.valid;
  };

  handleSubmit = e => {
    e.preventDefault();

    if (!this.handleValidate()) return null;

    this.props.authenticateRequest(CPF.format(this.state.form.document, 'digits'));
  };

  render() {
    return (
      <Fragment>
        <h4 className="text-uppercase font-bold mb-0 text-center">Login</h4>
        <h5 className="mb-0 text-muted text-center">Conecte-se no Painel</h5>
        <Form className="form-horizontal m-t-20 p-20" onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Input
              name="document"
              placeholder="CPF"
              mask="cpf"
              value={this.state.form.document}
              onChange={this.handleChangeDocument}
              errors={this.state.errors.document}
              focus={1}
            />
          </Form.Group>

          <Form.Group className="m-t-40">
            <div className="row align-items-center">
              <div className="col-6">
                <Link to="/" className="text-primary">
                  Criar Conta
                </Link>
              </div>

              <div className="col-6">
                <Form.Button
                  className="btn btn-custom btn-block"
                  type="submit"
                  disabled={this.props.auth.authenticate.loading}
                >
                  {this.props.auth.authenticate.loading ? <Loading /> : 'Próxima'}
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
)(Username);
