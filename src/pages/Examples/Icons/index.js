import React, { Component } from 'react';

import { Page, Panel } from 'components';

class Icons extends Component {
  render() {
    return (
      <Page>
        <Page.Title>Icones</Page.Title>

        <Panel>
          <p>
            Essa estrutura utiliza os icones do FontAwesome, você pode consultar todos os icones
            <a href="https://fontawesome.com/icons" target="_blank" rel="noopener noreferrer">
              aqui
            </a>
          </p>

          <p>
            Para carregar os icones, basta importa o componente de icones e carregá-lo pelo nome como no exemplo abaixo.
          </p>
          <pre>
            {`
  import { Icon } from 'components';
  <Icon name="users" />
            `}
          </pre>
        </Panel>
      </Page>
    );
  }
}

export default Icons;
