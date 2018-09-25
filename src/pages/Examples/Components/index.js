import React, { Component } from 'react';

import { Page, Panel, Loading, Button } from 'components';

class Components extends Component {
  render() {
    return (
      <Page>
        <Page.Title>Loading</Page.Title>

        <div className="row">
          <div className="col-4">
            <Panel>
              <Panel.Title>Loading Sizes</Panel.Title>

              <Loading size="small" className="m-r-10" title="Small Size" />
              <Loading size="medium" className="m-r-10" title="Medium Size" />
              <Loading size="large" className="m-r-10" title="Large Size" />
              <Loading size="x-large" title="X-Large Size" />
            </Panel>
          </div>

          <div className="col-4">
            <Panel>
              <Panel.Title>Loading Page</Panel.Title>

              <Loading type="page" size="large" />
            </Panel>
          </div>

          <div className="col-4">
            <Panel>
              <Panel.Title>Loading Table</Panel.Title>

              <Loading type="page" size="large" />
            </Panel>
          </div>

          <div className="col-4">
            <Panel>
              <Panel.Title>Loading Button</Panel.Title>

              <Button type="success" disabled>
                <Loading type="btn" size="small" text="Enviando" />
              </Button>
            </Panel>
          </div>
        </div>
      </Page>
    );
  }
}

export default Components;
