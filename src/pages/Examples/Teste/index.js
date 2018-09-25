import React, { Component } from 'react';

import { Page, Panel } from 'components';

class Teste extends Component {
  render() {
    return (
      <Page>
        <Page.Title>Página de Teste</Page.Title>

        <div className="row">
          <div className="col-6">
            <Panel>Conteudo que vem dentor da box</Panel>
          </div>
          <div className="col-6">
            <Panel>
              <Panel.Title>Título</Panel.Title>

              <p>nivaldo é um cara bem legal</p>
            </Panel>
          </div>
        </div>

        <Panel>
          <Panel.Title>asdasd</Panel.Title>
        </Panel>
      </Page>
    );
  }
}

export default Teste;
