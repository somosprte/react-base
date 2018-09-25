import React, { Component } from 'react';

import { Page, Panel } from 'components';

class Dashboard extends Component {
  render() {
    return (
      <Page>
        <Page.Title id="page-title-tour">Dashboard</Page.Title>

        <div className="row">
          <div className="col-4">
            <Panel>
              <Panel.Title>Icones</Panel.Title>
              Temos 10 icones disponíveis.
            </Panel>
          </div>

          <div className="col-4">
            <Panel>
              <Panel.Title>Componentes</Panel.Title>
              15 Componente criados para facilitar
            </Panel>
          </div>

          <div className="col-4">
            <Panel>
              <Panel.Title>Icones</Panel.Title>
              Temos 20 icones disponíveis.
            </Panel>
          </div>
        </div>
      </Page>
    );
  }
}

export default Dashboard;
