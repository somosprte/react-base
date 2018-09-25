import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import swal from 'sweetalert';
import api from 'services/api';

import { Creators as AuthActions, Types as AuthTypes } from 'store/ducks/auth';

function* loginRequest(action) {
  try {
    const url = 'login';
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
    const randomId = Math.floor(Math.random() * (5 - 1) + 1);
    const url = `users/${randomId}`;
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

function* registerRequest(action) {
  try {
    const url = 'register';
    yield call(api.post, url, action.payload.data);

    yield put(push('/login'));
    yield call(swal, 'Registro Concluído', 'Parabéns, seu registro foi concluído com sucesso.', 'success');
    yield put(AuthActions.registerSuccess());
  } catch (error) {
    yield call(
      swal,
      'Ops, algo deu errado',
      'Não foi possível concluir seu registo, tente novamente mais tarde.',
      'error',
    );
    yield put(AuthActions.registerFailure());
  }
}

function* recoverPasswordRequest(action) {
  try {
    const url = 'users?delay=5';
    yield call(api.get, url);

    yield put(push('/login'));
    yield call(
      swal,
      'Solicitação Enviada',
      'Uma confirmação de troca de senha foi enviada para o seu e-mail.',
      'success',
    );
    yield put(AuthActions.recoverPasswordSuccess());
  } catch (error) {
    yield call(
      swal,
      'Ops, algo deu errado',
      'Não foi possível solicitar a recuperação de senha, tente novamente mais tarde.',
      'error',
    );
    yield put(AuthActions.recoverPasswordFailure());
  }
}

export default function* sagaAuth() {
  yield takeLatest(AuthTypes.LOGIN_REQUEST, loginRequest);
  yield takeLatest(AuthTypes.LOGOUT_REQUEST, logoutRequest);
  yield takeLatest(AuthTypes.GET_USER_REQUEST, getAuthUserRequest);
  yield takeLatest(AuthTypes.REGISTER_REQUEST, registerRequest);
  yield takeLatest(AuthTypes.RECOVER_PASSWORD_REQUEST, recoverPasswordRequest);
}
