import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import swal from 'sweetalert';
import api from 'services/api';

import { Creators as AuthActions, Types as AuthTypes } from 'store/ducks/auth';

function* authenticateRequest(action) {
  try {
    const url = `people/person/cpf/${action.payload.document}`;
    const response = yield call(api.get, url);

    yield put(AuthActions.authenticateSuccess(response.data, action.payload.document));
  } catch (error) {
    yield call(swal, 'Ops, algo deu errado', 'Não foi possível autenticar seu CPF', 'error');
    yield put(AuthActions.authenticateFailure());
  }
}

function* loginRequest(action) {
  try {
    const url = 'auth/users/login';
    const response = yield call(api.post, url, action.payload.credentials);

    localStorage.setItem('auth_token', response.data.jwt);

    yield call(getAuthUserRequest);
    yield put(push('/'));
    yield put(AuthActions.loginSuccess());
  } catch (error) {
    yield call(swal, 'Falha ao conectar', 'Não foi possível autenticar o seu usuário', 'error');
    yield put(AuthActions.loginFailure());
  }
}

function* getAuthUserRequest(action) {
  try {
    const url = 'people/person/me';
    const response = yield call(api.get, url);

    yield put(AuthActions.getAuthUserSuccess(response.data));
  } catch (error) {
    yield call(logoutRequest);
    yield put(AuthActions.getAuthUserFailure());
  }
}

function* logoutRequest(action) {
  try {
    localStorage.removeItem('auth_token');

    yield put(push('/login'));
    yield put(AuthActions.logoutSuccess());
  } catch (error) {
    yield put(AuthActions.logoutFailure());
  }
}

export default function* sagaAuth() {
  yield takeLatest(AuthTypes.AUTHENTICATE_REQUEST, authenticateRequest);
  yield takeLatest(AuthTypes.LOGIN_REQUEST, loginRequest);
  yield takeLatest(AuthTypes.LOGOUT_REQUEST, logoutRequest);
  yield takeLatest(AuthTypes.GET_USER_REQUEST, getAuthUserRequest);
}
