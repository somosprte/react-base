import React, { Component } from 'react';

import { Page, Panel, Button } from 'components';

class Dashboard extends Component {
  render() {
    return (
      <Page>
        <Page.Title>Dados da Zôdio</Page.Title>
        <Panel>váerias informações</Panel>

        <Page.Title>Resumos</Page.Title>
        <div className="row">
          <div className="col-4">
            <Panel>váerias informações</Panel>
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
