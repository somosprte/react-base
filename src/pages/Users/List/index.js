import React, { Component, Fragment } from 'react';
import queryString from 'query-string';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as UsersActions, Selectors as UsersSelectors } from 'store/ducks/users';

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

        {!this.props.usersList.length && !this.props.users.loading ? (
          <Panel>
            <Panel.Title>Não encontramos</Panel.Title>
            <p>Essa tela vai ser exibida apenas se a lista estiver vazia e se não estiver carregnado dados.</p>
          </Panel>
        ) : (
          <Panel>
            {!this.props.usersList.length && this.props.users.loading ? (
              <Loading type="page" size="x-large" />
            ) : (
              <Fragment>
                {this.props.users.loading && <Loading type="table" size="x-large" />}

                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th />
                      <th>Nome Completo</th>
                      <th>Ativo</th>
                      <th />
                    </tr>
                  </thead>

                  <tbody>
                    {this.props.usersList.map(user => (
                      <tr key={user.id}>
                        <td width="30">
                          <img src={user.avatar} alt={user.fullname} className="rounded-circle" width="30" />
                        </td>
                        <td>{user.fullname}</td>
                        <td>{user.active ? 'Ativo' : 'Inativo'}</td>
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
              </Fragment>
            )}
          </Panel>
        )}

        <Pagination className="m-t-20" current={this.props.users.page} total={this.props.users.total} {...this.props} />
      </Page>
    );
  }
}

const mapState = state => ({
  users: state.users,
  usersList: UsersSelectors.all(state),
});

const mapActions = dispatch => bindActionCreators(UsersActions, dispatch);

export default connect(
  mapState,
  mapActions,
)(List);
