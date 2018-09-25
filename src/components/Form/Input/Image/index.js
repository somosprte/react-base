import React, { Component, Fragment } from 'react';

import { Icon } from 'components';

/**
 * - Ao selecionar uma imagem deverá definir o valor do campo e deverá carregar o blob da imagem selecionada.
 * - Caso haja imagem selecionada deverá aparecer uma opção de cancelar o upload, que retornará o valor para null.
 * - Caso a imagem tenha um defaultValue, deverá carregar ela como imagem, caso a imagem seja selecionada será substituida pelo blob.
 */
class Image extends Component {
  static defaultProps = {
    type: 'default', // default, image
    preview: false,
  };

  state = {
    selected: {
      source: '',
      name: '',
    },
  };

  handleChange = e => {
    const { value, files } = e.target;

    const filename = value.split('\\').pop();
    const file = files[0];

    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = e => this.setState({ selected: { source: e.target.result, name: filename } });
    }
  };

  render() {
    return (
      <div className="form-image">
        <input
          {...this.props}
          className={`input-image ${this.props.className}`}
          type="file"
          id={this.props.name}
          onChange={this.handleChange}
        />

        {this.props.type === 'default' ? (
          <Fragment>
            <label htmlFor={this.props.name}>
              <span className="btn btn-primary">
                <Icon name="upload" className="m-r-10" />
                {this.state.selected.name !== '' ? this.state.selected.name : 'Selecione uma imagem'}
              </span>
            </label>

            {this.props.preview && (
              <div className="input-image-preview">
                <img src={this.state.selected.source !== '' ? this.state.selected.source : this.props.preview} alt="" />
              </div>
            )}
          </Fragment>
        ) : (
          <div className="input-avatar">
            <label htmlFor={this.props.name} className="input-avatar-label">
              <div className="input-avatar-overlay" />
              <div className="input-avatar-preview">
                {this.props.preview && (
                  <img
                    src={this.state.selected.source !== '' ? this.state.selected.source : this.props.preview}
                    alt=""
                  />
                )}
              </div>
            </label>
          </div>
        )}
      </div>
    );
  }
}

export default Image;
