import React, { Component } from 'react';
import { matchPath } from 'react-router';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as UsersActions } from 'store/ducks/users';

import { Validate } from 'common';
import { Page, Panel, Loading } from 'components';
import { Form } from 'pages/Users/components';

class Edit extends Component {
  state = {
    id: 0,
    data: {
      name: '',
      job: '',
    },
    errors: {},
  };

  componentDidMount() {
    const match = matchPath(this.props.location.pathname, { path: '/users/:id/edit' });
    this.props.getUserRequest(match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.users.detail.loading && !nextProps.users.detail.loading) {
      const { data } = nextProps.users.detail;
      this.setState({
        data: {
          ...this.state.date,
          name: data.first_name,
          job: data.last_name,
        },
      });
    }
  }

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

    this.props.editUserRequest(this.props.match.params.id, data);
  };

  render() {
    return (
      <Page>
        <Page.Title>Editar Novo Usuário</Page.Title>

        <Panel>
          {this.props.users.detail.loading ? (
            <Loading type="page" size="x-large" />
          ) : (
            <Form
              data={this.state.data}
              errors={this.state.errors}
              onSubmit={this.handleSubmit}
              onValidate={this.handleValidate}
              submiting={this.props.users.edit.loading}
            />
          )}
        </Panel>
      </Page>
    );
  }
}

const mapState = state => ({
  users: state.users,
});

const mapActions = dispatch => bindActionCreators(UsersActions, dispatch);

export default connect(
  mapState,
  mapActions,
)(Edit);
