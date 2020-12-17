import { Types } from '../Types/UserAuthTypes'

export const login = (user) => {
  return {
    type: Types.LOGIN,
    payload: user
  };
}

export const signup = (user) => {
  return {
    type: Types.SIGNUP,
    payload: user
  };
}
