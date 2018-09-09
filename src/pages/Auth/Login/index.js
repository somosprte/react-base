import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { compose } from 'recompose';
import { withLayout } from 'hocs';

import { Form } from 'components';

class Login extends Component {
  render() {
    return (
      <Fragment>
        <div className="card-box">
          <form className="form-horizontal m-t-20" action="index.html">
            <Form.Group>
              <Form.Input placeholder="Usuário" />
            </Form.Group>

            <Form.Group>
              <Form.Input type="password" placeholder="Senha" />
            </Form.Group>

            <Form.Group>
              <Form.Button className="btn btn-custom btn-bordred btn-block waves-effect waves-light" type="submit">
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
        </div>
      </Fragment>
    );
  }
}

export default compose(withLayout('Auth'))(Login);
