import { takeLatest, all } from 'redux-saga/effects';
import { registerSaga, loginSaga, getRolesSaga } from './AuthenticationSaga';

import { Types } from '../redux/Types/UserAuthTypes';


export default function* watchUserAuthentication() {
  yield all([takeLatest(Types.SIGNUP, registerSaga),
  takeLatest(Types.LOGIN, loginSaga),
  takeLatest(Types.GET_ROLES, getRolesSaga)])
}
