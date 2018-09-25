import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as UsersActions } from 'store/ducks/users';

import { Validate } from 'common';
import { Page, Panel } from 'components';
import { Form } from 'pages/Users/components';

class Create extends Component {
  state = {
    data: {
      avatar: '',
      name: '',
      job: '',
    },
    errors: {},
  };

  handleValidate = data => {
    const rules = {
      name: {
        required: true,
        length: {
          min: 3,
        },
      },

      job: {
        required: true,
        length: {
          min: 3,
        },
      },
    };

    const validate = Validate(data, rules);
    this.setState({ errors: validate.errors });

    return validate.valid;
  };

  handleSubmit = data => {
    if (!this.handleValidate(data)) return null;

    this.props.createUserRequest(data);
  };

  render() {
    return (
      <Page>
        <Page.Title>Adicionar Novo Usuário</Page.Title>

        <Panel>
          <Form
            data={this.state.data}
            errors={this.state.errors}
            onSubmit={this.handleSubmit}
            onValidate={this.handleValidate}
            submiting={this.props.users.create.loading}
          />
        </Panel>
      </Page>
    );
  }
}

const mapState = state => ({
  users: state.users,
});

const mapActions = dispatch => bindActionCreators(UsersActions, dispatch);

export default connect(mapState, mapActions)(Create);
