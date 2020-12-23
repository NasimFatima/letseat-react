import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './rootReducer';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from '../sagas';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
};


const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (e) {
    console.error(e)
  }
};

const peristedState = loadFromLocalStorage();

export const store = createStore(
  rootReducer,
  peristedState,
  composeWithDevTools(applyMiddleware(logger, sagaMiddleware))
);

store.subscribe(() => {
  saveToLocalStorage(store.getState());
});

sagaMiddleware.run(rootSaga)
