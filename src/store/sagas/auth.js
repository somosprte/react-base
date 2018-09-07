import { put, takeLatest } from 'redux-saga/effects';

import { Creators as AuthActions, Types as AuthTypes } from 'store/ducks/auth';

function* loginRequest(action) {
  try {
    yield put(AuthActions.loginSuccess());
  } catch (error) {
    yield put(AuthActions.loginFailure());
  }
}

export default function* sagaAuth() {
  yield takeLatest(AuthTypes.LOGIN_REQUEST, loginRequest);
}
