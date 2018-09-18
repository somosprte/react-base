import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Icon } from 'components';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-custom">
        <div className="container-fluid">
          <div id="navigation">
            <ul className="navigation-menu">
              <li className="has-submenu">
                <Link to="/">
                  <i className="mdi mdi-view-dashboard" />
                  <Icon name="tachometer" />
                  <span>Dashboard</span>
                </Link>
              </li>

              <li>
                <Link to="/users">
                  <Icon name="users" />
                  <span>Usuários</span>
                </Link>
              </li>

              <li className="has-submenu">
                <Link to="/">
                  <Icon name="flag" />
                  <span>Exemplos</span>
                </Link>

                <ul className="submenu megamenu">
                  <li>
                    <Link to="/examples/icons">Icones</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
