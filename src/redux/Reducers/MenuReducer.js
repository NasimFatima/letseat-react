import { MENU_Types } from '../Types/MenuTypes'

const initial_state = {
  items: [],
  details: [],
  uI: {}
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
    default:
      return state;
  }
};
