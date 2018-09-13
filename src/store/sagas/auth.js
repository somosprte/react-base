import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import swal from 'sweetalert';

import { Creators as AuthActions, Types as AuthTypes } from 'store/ducks/auth';

function* loginRequest(action) {
  try {
    yield put(push('/'));
    yield put(AuthActions.loginSuccess());
  } catch (error) {
    // The error message should come from API.
    yield call(swal, 'Falha ao conectar', 'Não foi possível autenticar o seu usuário', 'error');
    yield put(AuthActions.loginFailure());
  }
}

export default function* sagaAuth() {
  yield takeLatest(AuthTypes.LOGIN_REQUEST, loginRequest);
}
