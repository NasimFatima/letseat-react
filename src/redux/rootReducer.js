import { combineReducers } from 'redux';
import { userAuthReducer } from './Reducers/UserAuthReducer';

export const rootReducer = combineReducers({
  auth: userAuthReducer,
});
