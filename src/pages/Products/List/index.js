import React, { Component } from 'react';

import { Page, Panel } from 'components';

class List extends Component {
  render() {
    return (
      <Page>
        <Page.Title>Produtos</Page.Title>

        <Panel>
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Nome</th>
                <th>Preço</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>001</td>
                <td>iPhone X 64GB</td>
                <td>R$ 200,00</td>
              </tr>
            </tbody>
          </table>
        </Panel>
      </Page>
    );
  }
}

export default List;
