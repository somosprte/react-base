import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as AuthActions } from 'store/ducks/auth';

import { Button } from 'components';

class Navbar extends Component {
  handleLogout = () => {
    this.props.logoutRequest();
  };

  render() {
    return (
      <div className="navbar-custom">
        <div className="container-fluid">
          <div id="navigation">
            <ul className="navigation-menu">
              <li className="has-submenu">
                <Link to="/">
                  <i className="mdi mdi-view-dashboard" />
                  <span>Dashboard</span>
                </Link>
              </li>

              <li>
                <Link to="/products">
                  {/* <i className="mdi mdi-" */}
                  <span>Produtos</span>
                </Link>
              </li>

              <li className="has-submenu">
                <Link to="/">
                  <i className="mdi mdi-invert-colors" />
                  <span>Telas</span>
                </Link>

                <ul className="submenu megamenu">
                  <li>
                    <ul>
                      <li>
                        <Link to="/login">Login</Link>
                      </li>
                      <li>
                        <Link to="/">Register</Link>
                      </li>
                      <li>
                        <Link to="/">Forgot Password</Link>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <ul>
                      <li>
                        <Link to="/">Tables</Link>
                      </li>
                      <li>
                        <Link to="/">Charts</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li>
                <Button onClick={this.handleLogout}>
                  <span>Logout</span>
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const mapActions = dispatch => bindActionCreators(AuthActions, dispatch);

export default connect(
  null,
  mapActions,
)(Navbar);
