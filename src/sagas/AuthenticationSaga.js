/* eslint-disable no-debugger */
import { put, call } from 'redux-saga/effects';
import { registerUserService, loginUserService, logOutUserService } from '../Services/AuthenticationService'
import { loginSuccess, loginError, signupError, signupSuccess, getRolesSuccess } from '../redux'
import { updateLocation } from '../utils/common'
import { getAllRoles } from '../Services/UserService'
import { URLS } from '../urls'
import { toast } from "react-toastify";

export function* registerSaga(payload) {
  try {
    const response = yield call(registerUserService, payload);
    yield put(signupSuccess(response))
    if (!response.error)
      toast.success("Registered Successfully")
    yield call(updateLocation, URLS.HOME);
  } catch (error) {
    yield put(signupError({ error: error }));
    toast.error(String(error))
  }
}

export function* loginSaga(payload) {
  try {
    const response = yield call(loginUserService, payload);
    yield put(loginSuccess(response))
    if (!response.error) {
      yield call(updateLocation, URLS.HOME);

    }
  } catch (error) {
    toast.error(String(error))
  }
}


export function* logOutSaga() {
  try {
    const response = yield call(logOutUserService);
    if (response.detail === 'Successfully logged out.') {
      yield call(updateLocation, URLS.LOGIN)
    } else {
      toast.error(String(response.error))
    }

  } catch (error) {
    toast.error(String(error))
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
