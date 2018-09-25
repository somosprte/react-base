import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as AuthActions, Selectors as AuthSelectors } from 'store/ducks/auth';

import { Icon, Dropdown } from 'components';

import LogoSmall from 'assets/images/logo-sm.png';
import Logo from 'assets/images/logo.png';

class Topbar extends Component {
  handleLogout = e => {
    e.preventDefault();
    this.props.logoutRequest();
  };

  render() {
    return (
      <div className="topbar-main">
        <div className="container-fluid">
          <div className="logo" id="logo-tour">
            <Link to="/" className="logo">
              <img src={LogoSmall} alt="" height="26" className="logo-small" />
              <img src={Logo} alt="" height="24" className="logo-large" />
            </Link>
          </div>

          <div className="menu-extras topbar-custom">
            <ul className="list-unstyled topbar-right-menu float-right mb-0">
              <li className="menu-item">
                <a className="navbar-toggle nav-link">
                  <div className="lines">
                    <span />
                    <span />
                    <span />
                  </div>
                </a>
              </li>

              {!this.props.auth.user.loading && (
                <li>
                  <Dropdown>
                    <Dropdown.Button className="nav-link nav-user" key="button">
                      <img src={this.props.user.avatar} alt="user" className="rounded-circle m-r-5" />
                      <span>{this.props.user.fullname}</span>
                    </Dropdown.Button>

                    <Dropdown.Menu key="menu">
                      <Link to="/" className="dropdown-item">
                        <Icon name="user" /> Meu Perfil
                      </Link>

                      <Link to="/users" className="dropdown-item">
                        <Icon name="cog" /> Configurações
                      </Link>

                      <a href="" className="dropdown-item" onClick={this.handleLogout}>
                        <Icon name="power-off" /> Logout
                      </a>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
              )}
            </ul>
          </div>

          <div className="clearfix" />
        </div>
      </div>
    );
  }
}

const mapState = state => ({
  auth: state.auth,
  user: AuthSelectors.user(state),
});

const mapActions = dispatch => bindActionCreators(AuthActions, dispatch);

export default connect(
  mapState,
  mapActions,
)(Topbar);
