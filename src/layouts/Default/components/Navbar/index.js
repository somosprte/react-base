import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import hopscotch from 'hopscotch';
import Tour from 'config/Tour';

import { Icon, Button } from 'components';

class Navbar extends Component {
  handleStartTour = () => {
    hopscotch.startTour(Tour);
  };

  render() {
    return (
      <div className="navbar-custom">
        <div className="container-fluid">
          <div id="navigation">
            <div className="row">
              <div className="col-10">
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

              <div className="col-2 text-right">
                <Button type="primary" className="btn-tour btn-rounded" onClick={this.handleStartTour}>
                  <Icon name="plane" /> Tour pelo app
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
