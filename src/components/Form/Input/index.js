import React, { Component, Fragment } from 'react';
import TextInputMask from 'react-masked-text';

class Input extends Component {
  static defaultProps = {
    errors: null,
    mask: null,
    focus: 0,
  };

  state = {
    className: 'form-control',
  };

  componentDidMount() {
    // Focus masked inputs
    this.props.mask !== null && !!this.props.focus && this.input._input.focus();

    // Focus standard inputs.
    this.props.mask === null && !!this.props.focus && this.input.focus();
  }

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
        {this.props.mask === null ? (
          <input
            ref={input => {
              this.input = input;
            }}
            type="text"
            className={this.state.className}
            {...this.props}
          />
        ) : (
          <TextInputMask
            ref={input => {
              this.input = input;
            }}
            className={this.state.className}
            kind={this.props.mask}
            onChangeText={this.props.onChange}
            {...this.props}
          />
        )}

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
