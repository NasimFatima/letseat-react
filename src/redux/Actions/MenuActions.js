import { MENU_Types } from '../Types/MenuTypes'

export const getMenuItems = () => {
  return {
    type: MENU_Types.GET_MENU_ITEMS,
  };
}

export const getMenuItemsSuccess = data => {
  return {
    type: MENU_Types.GET_MENU_ITEMS_SUCCESS,
    payload: data
  };
}

export const getItemDetails = data => {
  return {
    type: MENU_Types.GET_ITEM_DETAILS,
    payload: data
  };
}

export const getItemDetailsSuccess = data => {
  return {
    type: MENU_Types.GET_ITEM_DETAILS_SUCCESS,
    payload: data
  };
}

export const setUIValues = data => {
  return {
    type: MENU_Types.SET_UI_VALUES,
    payload: data
  };
}


export const createMenu = data => {
  return {
    type: MENU_Types.CREATE_MENU,
    payload: data
  };
}

export const addToCart = data => {
  console.log("function called")
  return {
    type: MENU_Types.ADD_TO_CART,
    payload: data
  };
}

export const updateCart = data => {
  return {
    type: MENU_Types.UPDATE_CART,
    payload: data
  };
}
