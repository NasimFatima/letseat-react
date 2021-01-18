import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './rootReducer';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from '../sagas';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
const sagaMiddleware = createSagaMiddleware()
export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(logger, sagaMiddleware))
);
export const persistor = persistStore(store)
sagaMiddleware.run(rootSaga)
