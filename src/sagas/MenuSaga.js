import { put, call } from 'redux-saga/effects';
import { getAllMenuItems, getItemsCategories, createMenuItem } from '../Services/Menuservice'
import { getMenuItemsSuccess, getItemDetailsSuccess, addToCart } from '../redux'
import { updateLocation } from '../utils/common'
import { URLS } from '../urls'
import { toast } from "react-toastify";
import { placeOrder, getOrders } from '../Services/OrderService'
import { API_END_POINTS } from '../apiEndPoints'

export function* getAllMenuItemsSaga() {
  try {
    const items = yield call(getAllMenuItems);
    if (items.length) {
      yield put(getMenuItemsSuccess(items))
      const details = yield call(getItemsCategories, `?id=${items[0].id}`)
      yield put(getItemDetailsSuccess(details))
    }
  } catch (error) {
    toast.error(String(error))
  }
}

export function* getItemDetailsSaga(data) {
  try {
    const details = yield call(getItemsCategories, `?id=${data.payload}`)
    yield put(getItemDetailsSuccess(details))
  } catch (error) {
    toast.error(String(error))
  }
}

export function* createMenuItems(data) {
  try {
    const response = yield call(createMenuItem, data);
    if (response.data) {
      toast.success("Menu Item Added Successfully")
      yield call(updateLocation, URLS.MENU);
    }
  } catch (error) {
    toast.error(String(error))
  }
}

export function* updateCartSaga(data) {
  try {
    const response = yield call(placeOrder, data);
    if (response.data) {
      toast.success("Cart is Updated")
      yield call(updateLocation, URLS.MENU);
      data = response.data
      yield put(addToCart(data.order))
    }
  } catch (error) {
    toast.error(String(error))
  }
}


export function* getCartItemsSaga() {
  try {
    const response = yield call(getOrders, API_END_POINTS.CART_ITEMS);
    yield put(addToCart(response[0].order))

  } catch (error) {
    console.error(error)
  }
}
