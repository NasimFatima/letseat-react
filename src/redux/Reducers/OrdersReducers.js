import { ORDERS_Types } from '../Types/OrdersTypes'

const initial_state = {
  orders: []
}


export const ordersReducer = (state = initial_state, action) => {

  const payload = action.payload
  console.log("payload", payload)
  switch (action.type) {
    case ORDERS_Types.VIEW_ORDER_SUCCESS:
      return { ...state, orders: payload };
    default:
      return state;
  }
};
