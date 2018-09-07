import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';

import sagas from 'store/sagas';
import reducers from 'store/ducks';
import { history } from 'routes/history';

const sagaMiddleware = createSagaMiddleware();
const routersMiddleware = routerMiddleware(history);
const middleware = [sagaMiddleware, routersMiddleware];

const createAppropriateStore = process.env.NODE_ENV === 'development' ? console.tron.createStore : createStore;
const store = createAppropriateStore(reducers, applyMiddleware(...middleware));
sagaMiddleware.run(sagas);

export default store;
