import { put, call } from 'redux-saga/effects';
import { getAllMenuItems, getItemsCategories, createMenuItem } from '../Services/Menuservice'
import { getMenuItemsSuccess, getItemDetailsSuccess } from '../redux'
import { updateLocation } from '../utils/common'
import { URLS } from '../urls'
import { toast } from "react-toastify";

export function* getAllMenuItemsSaga() {
  try {
    const items = yield call(getAllMenuItems);
    yield put(getMenuItemsSuccess(items))
    const details = yield call(getItemsCategories, `?id=${items[0].id}`)
    yield put(getItemDetailsSuccess(details))
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
