import { takeLatest, all } from 'redux-saga/effects';
import { registerSaga, loginSaga, getRolesSaga, logOutSaga } from './AuthenticationSaga';
import { getEmployeesSaga, createEmployeesSaga } from './EmployeeSaga'
import { getAllMenuItemsSaga, getItemDetailsSaga, createMenuItems } from './MenuSaga'
import { Types } from '../redux/Types/UserAuthTypes';
import { EMPLOYEE_Types } from '../redux/Types/EmployeeTypes'
import { MENU_Types } from '../redux/Types/MenuTypes'
import { ORDERS_Types } from '../redux/Types/OrdersTypes'
import { placeOrderSaga, getOrdersSaga } from './OrdersSaga'

export default function* watchUserAuthentication() {
  yield all([takeLatest(Types.SIGNUP, registerSaga),
  takeLatest(Types.LOGIN, loginSaga),
  takeLatest(Types.GET_ROLES, getRolesSaga),
  takeLatest(EMPLOYEE_Types.GET_EMPLOYEES, getEmployeesSaga),
  takeLatest(EMPLOYEE_Types.CREATE_EMPLOYEE, createEmployeesSaga),
  takeLatest(MENU_Types.GET_MENU_ITEMS, getAllMenuItemsSaga),
  takeLatest(MENU_Types.GET_ITEM_DETAILS, getItemDetailsSaga),
  takeLatest(MENU_Types.CREATE_MENU, createMenuItems),
  takeLatest(Types.LOG_OUT, logOutSaga),
  takeLatest(ORDERS_Types.PLACE_ORDER, placeOrderSaga),
  takeLatest(ORDERS_Types.VIEW_ORDER, getOrdersSaga),

  ])
}
