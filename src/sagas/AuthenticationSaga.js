/* eslint-disable no-debugger */
import { put, call } from 'redux-saga/effects';
import { registerUserService, loginUserService } from '../Services/AuthenticationService'
import { loginSuccess, loginError, signupError, signupSuccess, getRolesSuccess, getRolesError } from '../redux'
import { updateLocation, getAllRoles } from '../utils/common'
import { URLS } from '../urls'

export function* registerSaga(payload) {
  try {
    const response = yield call(registerUserService, payload);
    yield put(signupSuccess(response))
    if (!response.error)
      yield call(updateLocation, URLS.HOME);
  } catch (error) {
    yield put(signupError({ error: error }));
  }
}

export function* loginSaga(payload) {
  try {
    const response = yield call(loginUserService, payload);
    yield put(loginSuccess(response))
    if (!response.error)
      yield call(updateLocation, URLS.HOME);
  } catch (error) {
    yield put(loginError({ error: error }))
  }
}

export function* getRolesSaga() {
  try {
    const response = yield call(getAllRoles);
    yield put(getRolesSuccess(response))
  } catch (error) {
    console.error(error)
  }
}
