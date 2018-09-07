import React, { Component } from 'react';

import { withLayout } from 'hocs';

class Dashboard extends Component {
  render() {
    return <h2>Bem vindo ao dashboard</h2>;
  }
}

export default withLayout()(Dashboard);
