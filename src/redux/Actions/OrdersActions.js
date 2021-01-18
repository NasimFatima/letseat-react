import { ORDERS_Types } from '../Types/OrdersTypes'

export const placeOrder = data => {
  return {
    type: ORDERS_Types.PLACE_ORDER,
    payload: data
  };
}

export const viewOrder = () => {
  return {
    type: ORDERS_Types.VIEW_ORDER,
  };
}

export const viewOrderSuccess = data => {
  return {
    type: ORDERS_Types.VIEW_ORDER_SUCCESS,
    payload: data
  };
}
