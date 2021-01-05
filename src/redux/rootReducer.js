import { combineReducers } from 'redux';
import { userAuthReducer } from './Reducers/UserAuthReducer';
import { employeeReducer } from './Reducers/EmployeeReducer'
import { menuReducer } from './Reducers/MenuReducer'

export const rootReducer = combineReducers({
  auth: userAuthReducer,
  employee: employeeReducer,
  menu: menuReducer
});
