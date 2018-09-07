import { all } from 'redux-saga/effects';

import sagaAuth from 'store/sagas/auth';

export default function* rootSaga() {
  return yield all([sagaAuth()]);
}
