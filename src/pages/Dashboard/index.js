import React, { Component } from 'react';

import { Page, Panel, Button } from 'components';

class Dashboard extends Component {
  render() {
    return (
      <Page>
        <Page.Title id="page-title-tour">Dados da Zôdio</Page.Title>
        <Panel>váerias informações</Panel>

        <Page.Title>Resumos</Page.Title>

        <div className="row">
          <div className="col-4">
            <Panel>
              Icones
              <i className="mdi mdi-account" />
              <i className="fab fa-facebook" />
            </Panel>
          </div>

          <div className="col-4">
            <Panel>váerias informações</Panel>
          </div>
          <div className="col-4">
            <Panel>váerias informações</Panel>
          </div>
        </div>

        <Button type="success">Entrar em contato</Button>
      </Page>
    );
  }
}

export default Dashboard;
