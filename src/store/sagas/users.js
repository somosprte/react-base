import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import swal from 'sweetalert';
import api from 'services/api';

import { Creators as UsersActions, Types as UsersTypes } from 'store/ducks/users';

function* getUserRequest(action) {
  try {
    const url = `users/${action.payload.id}`;
    const response = yield call(api.get, url);

    yield put(UsersActions.getUserSuccess(response.data));
  } catch (error) {
    yield put(push('/users'));
    yield call(swal, 'Ops, algo deu errado', 'Não foi possível encontrar o usuário', 'error');
    yield put(UsersActions.getUserFailure());
  }
}

function* getUsersListRequest(action) {
  try {
    const page = action.payload.page !== null ? action.payload.page : 1;

    const url = `users?page=${page}`;
    const response = yield call(api.get, url);

    yield put(UsersActions.getUsersListSuccess(response.data));
  } catch (error) {
    yield put(UsersActions.getUsersListFailure());
  }
}

function* createUserRequest(action) {
  try {
    const url = 'users';
    yield call(api.post, url, action.payload.data);

    yield put(push('/users'));
    yield call(swal, 'Sucesso', 'Usuário criado com sucesso', 'success');
    yield put(UsersActions.createUserSuccess());
  } catch (error) {
    yield call(swal, 'Ops, algo deu errado', 'Não foi possível criar o usuário', 'error');
    yield put(UsersActions.createUserFailure());
  }
}

function* editUserRequest(action) {
  try {
    const url = `users/${action.payload.id}`;
    yield call(api.put, url, action.payload.data);

    yield put(push('/users'));
    yield call(swal, 'Sucesso', 'Usuário atualizado com sucesso', 'success');
    yield put(UsersActions.editUserSuccess());
  } catch (error) {
    yield call(swal, 'Ops, algo deu errado', 'Não foi possível stualizar o usuário', 'error');
    yield put(UsersActions.editUserFailure());
  }
}

export default function* sagaUsers() {
  yield takeLatest(UsersTypes.GET_REQUEST, getUserRequest);
  yield takeLatest(UsersTypes.GET_LIST_REQUEST, getUsersListRequest);
  yield takeLatest(UsersTypes.CREATE_REQUEST, createUserRequest);
  yield takeLatest(UsersTypes.EDIT_REQUEST, editUserRequest);
}
