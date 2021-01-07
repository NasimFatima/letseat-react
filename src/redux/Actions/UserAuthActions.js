import { Types } from '../Types/UserAuthTypes'

export const login = (user) => {
  return {
    type: Types.LOGIN,
    payload: user
  };
}
export const loginSuccess = data => {
  return {
    type: Types.LOGIN_SUCCESS,
    payload: data
  };
}

export const loginError = data => {
  return {
    type: Types.LOGIN_ERROR,
    payload: data
  };
}

export const signup = (user) => {
  return {
    type: Types.SIGNUP,
    payload: user
  };
}

export const signupSuccess = data => {
  return {
    type: Types.SIGNUP_SUCCESS,
    payload: data
  };
}

export const signupError = data => {
  return {
    type: Types.SIGNUP_ERROR,
    payload: data
  };
}

export const getRoles = () => {
  return {
    type: Types.GET_ROLES
  };
}

export const getRolesSuccess = data => {
  return {
    type: Types.GET_ROLES_SUCCESS,
    payload: data
  };
}

export const logOut = () => {
  return {
    type: Types.LOG_OUT
  };
}
