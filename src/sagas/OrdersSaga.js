import { put, call } from 'redux-saga/effects';
import { placeOrder, getOrders, updateOrder } from '../Services/OrderService'
import { viewOrderSuccess, addToCart } from '../redux'
import { updateLocation } from '../utils/common'
import { URLS } from '../urls'
import { toast } from "react-toastify";
import { API_END_POINTS } from '../apiEndPoints'

export function* placeOrderSaga(data) {
  try {
    const response = yield call(placeOrder, data);
    if (response.data) {
      toast.success("Order has been placed Successfully")
      yield put(addToCart([]))
      yield call(updateLocation, URLS.ORDER);
    }
  } catch (error) {
    toast.error(String(error))
  }
}

export function* getOrdersSaga() {
  try {
    const response = yield call(getOrders, API_END_POINTS.ORDERS);
    yield put(viewOrderSuccess(response))

  } catch (error) {
    console.error(error)
  }
}

export function* updateOrderSaga(data) {
  try {
    const response = yield call(updateOrder, data);
    if (response) {
      yield call(updateLocation, URLS.ORDER)
      const response = yield call(getOrders, API_END_POINTS.ORDERS);
      yield put(viewOrderSuccess(response))
      toast.success("Order has been Updated Successfully")
    }
  } catch (error) {
    toast.error(String(error))
  }
}
