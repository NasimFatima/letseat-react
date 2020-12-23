import { Types } from '../Types/UserAuthTypes'

const initial_state = {
  user: {},
  roles: []
}


export const userAuthReducer = (state = initial_state, action) => {

  const payload = action.payload
  switch (action.type) {
    case Types.LOGIN_SUCCESS:
      return { ...state, user: payload };
    case Types.LOGIN_ERROR:
      return { ...state, user: payload };
    case Types.SIGNUP_SUCCESS:
      return { ...state, user: payload };
    case Types.SIGNUP_ERROR:
      return { ...state, user: payload };
    case Types.GET_ROLES_SUCCESS:
      return { ...state, roles: payload };
    default:
      return state;
  }
};
