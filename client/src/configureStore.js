import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';

import getPlantsSaga from './sagas/getPlantsSaga';

import reducers from './reducers';

// double check on imports working, you should never have to specify ./reducers/index
const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }

  const store = createStore(reducers, applyMiddleware(...middlewares));

  sagaMiddleware.run(getPlantsSaga);
  return store;
};

export default configureStore;
