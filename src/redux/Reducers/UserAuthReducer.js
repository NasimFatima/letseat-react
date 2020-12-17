import { Types } from '../Types/UserAuthTypes'

const initial_state = {
  user: {
    pk: 0,
    first_name: '',
    last_name: '',
    phone: '',
    address: '',
    password: ''
  },
}


export const userAuthReducer = (state = initial_state, action) => {

  const payload = action.payload
  switch (action.type) {
    case Types.LOGIN:
      return { ...state, user: payload }
    case Types.SIGNUP:
      return { ...state, user: payload }
    default:
      return state;
  }
};
