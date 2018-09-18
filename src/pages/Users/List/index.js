import React, { Component } from 'react';
import queryString from 'query-string';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as UsersActions } from 'store/ducks/users';

import { Page, Panel, Loading, Button, Pagination } from 'components';

class List extends Component {
  componentDidMount() {
    const params = queryString.parse(this.props.location.search);
    const page = params.page ? params.page : 1;
    this.props.getUsersListRequest(page);
  }

  componentWillReceiveProps(nextProps) {
    if (queryString.parse(this.props.location.search).page !== queryString.parse(nextProps.location.search).page) {
      this.props.getUsersListRequest(queryString.parse(nextProps.location.search).page);
    }
  }

  render() {
    return (
      <Page>
        <div className="row align-items-center">
          <div className="col-6">
            <Page.Title>Usuários</Page.Title>
          </div>

          <div className="col-6 text-right">
            <Link to="/users/create" className="btn btn-success">
              Adicionar Novo
            </Link>
          </div>
        </div>

        <Panel>
          {this.props.users.loading ? (
            <Loading />
          ) : (
            <table className="table table-striped">
              <thead>
                <tr>
                  <th />
                  <th>Nome</th>
                  <th>Sobrenome</th>
                  <th />
                </tr>
              </thead>

              <tbody>
                {this.props.users.data.map(user => (
                  <tr key={user.id}>
                    <td width="30">
                      <img src={user.avatar} alt={user.first_name} className="rounded-circle" width="30" />
                    </td>
                    <td>{user.first_name}</td>
                    <td>{user.last_name}</td>
                    <td align="right">
                      <Link to={`/users/${user.id}/edit`} className="btn btn-primary btn-sm m-r-5">
                        Editar
                      </Link>

                      <Button type="danger" className="btn-sm">
                        Remover
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </Panel>

        <Pagination className="m-t-20" current={this.props.users.page} total={this.props.users.total} {...this.props} />
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
)(List);
