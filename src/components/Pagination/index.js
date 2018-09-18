import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';

class Pagination extends Component {
  static defaultProps = {
    current: 1,
    total: 1,
  };

  handlePageUrl = page => {
    const url = this.props.location.pathname;
    const params = queryString.parse(this.props.location.search);

    if (Object.keys(params).indexOf('page') !== -1) {
      const queryString = Object.keys(params).map(param => {
        return param !== 'page' ? `${param}=${params[param]}` : `${param}=${page}`;
      });

      return `${url}?${queryString.join('&')}`;
    }

    return `${url}?page=${page}`;
  };

  render() {
    return (
      this.props.total > 1 && (
        <ul className={`pagination pagination-split ${this.props.className}`}>
          {Array.from({ length: this.props.total }).map((value, index) => (
            <li className={`page-item ${this.props.current === index + 1 ? 'active' : ''}`} key={index}>
              <Link to={this.handlePageUrl(index + 1)} className="page-link">
                {index + 1}
              </Link>
            </li>
          ))}
        </ul>
      )
    );
  }
}

export default Pagination;
