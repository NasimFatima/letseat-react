import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './rootReducer';
import logger from 'redux-logger';

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
  composeWithDevTools(applyMiddleware(logger))
);

store.subscribe(() => {
  saveToLocalStorage(store.getState());
});
