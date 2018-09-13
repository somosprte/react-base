import React from 'react';
import { Link } from 'react-router-dom';

const Topbar = () => (
  <div className="topbar-main">
    <div className="container-fluid">
      <div className="logo">
        <Link to="/" className="logo">
          <img src="assets/images/logo-sm.png" alt="" height="26" className="logo-small" />
          <img src="assets/images/logo.png" alt="" height="24" className="logo-large" />
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

          <li>
            <div className="notification-box">
              <ul className="list-inline mb-0">
                <li>
                  <Link to="/" className="right-bar-toggle">
                    <i className="mdi mdi-bell-outline noti-icon" />
                  </Link>
                  <div className="noti-dot">
                    <span className="dot" />
                    <span className="pulse" />
                  </div>
                </li>
              </ul>
            </div>
          </li>

          <li className="dropdown notification-list">
            <Link to="/" className="nav-link dropdown-toggle nav-user" data-toggle="dropdown">
              <img src="assets/images/users/avatar-1.jpg" alt="user" className="rounded-circle" />
            </Link>
            <div className="dropdown-menu dropdown-menu-right">
              <Link to="/" className="dropdown-item notify-item">
                <i className="ti-user m-r-5" /> Profile
              </Link>

              <Link to="/" className="dropdown-item notify-item">
                <i className="ti-settings m-r-5" /> Settings
              </Link>

              <Link to="/" className="dropdown-item notify-item">
                <i className="ti-lock m-r-5" /> Lock screen
              </Link>

              <Link to="/" className="dropdown-item notify-item">
                <i className="ti-power-off m-r-5" /> Logout
              </Link>
            </div>
          </li>
        </ul>
      </div>

      <div className="clearfix" />
    </div>
  </div>
);

export default Topbar;
