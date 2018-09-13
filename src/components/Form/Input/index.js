import React, { Component, Fragment } from 'react';

class Input extends Component {
  static defaultProps = {
    errors: null,
  };

  state = {
    className: 'form-control',
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors !== null) {
      this.setState({ className: 'form-control parsley-error' });
    } else {
      this.setState({ className: 'form-control' });
    }
  }

  render() {
    return (
      <Fragment>
        <input type="text" className={this.state.className} {...this.props} />

        {this.props.errors !== null && (
          <ul className="parsley-errors-list filled">
            {this.props.errors.map((error, index) => (
              <li className="parsley-required" key={index}>
                {error}
              </li>
            ))}
          </ul>
        )}
      </Fragment>
    );
  }
}

export default Input;
