import { put, call } from 'redux-saga/effects';
import { placeOrder, getOrders } from '../Services/OrderService'
import { viewOrderSuccess } from '../redux'
import { updateLocation } from '../utils/common'
import { URLS } from '../urls'
import { toast } from "react-toastify";


export function* placeOrderSaga(data) {
  try {
    const response = yield call(placeOrder, data);
    if (response.data) {
      toast.success("Order has been placed Successfully")
      yield call(updateLocation, URLS.MENU);
    }
  } catch (error) {
    toast.error(String(error))
  }
}

export function* getOrdersSaga() {
  try {
    console.log("in saGA")
    const response = yield call(getOrders);
    const data = response['data']
    data.map(order => {
      order.order.map(item => {
        item['size'] = item?.itemCategory?.size
        item['category'] = item?.itemCategory?.itemCategory.name
        item['item'] = item?.itemCategory?.itemCategory.menuItem.name
      })
    })
    yield put(viewOrderSuccess(data))

  } catch (error) {
    console.error(error)
  }
}
