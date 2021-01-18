import { MENU_Types } from '../Types/MenuTypes'

const initial_state = {
  items: [],
  details: [],
  uI: {},
  cart: []
}


export const menuReducer = (state = initial_state, action) => {

  const payload = action.payload
  console.log("payload", payload)
  switch (action.type) {
    case MENU_Types.GET_MENU_ITEMS_SUCCESS:
      return { ...state, items: payload };
    case MENU_Types.GET_ITEM_DETAILS_SUCCESS:
      return { ...state, details: payload };
    case MENU_Types.SET_UI_VALUES:
      return { ...state, uI: { ...state.uI, ...payload } };
    case MENU_Types.ADD_TO_CART:
      return { ...state, cart: [...state.cart, payload] };
    case MENU_Types.UPDATE_CART:
      return { ...state, cart: payload };
    default:
      return state;
  }
};
