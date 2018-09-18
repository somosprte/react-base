import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import auth from './auth';
import users from './users';

export default combineReducers({
  auth,
  users,
  router: routerReducer,
});
