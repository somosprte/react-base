import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
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
        </ul>
      </div>
    </div>
  </div>
);

export default Navbar;
