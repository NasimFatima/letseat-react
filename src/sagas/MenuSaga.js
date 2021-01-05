import { put, call } from 'redux-saga/effects';
import { getAllMenuItems, getItemsCategories, createMenuItem } from '../Services/Menuservice'
import { getMenuItemsSuccess, getItemDetailsSuccess } from '../redux'
import { updateLocation } from '../utils/common'
import { URLS } from '../urls'

export function* getAllMenuItemsSaga() {
  try {
    const items = yield call(getAllMenuItems);
    yield put(getMenuItemsSuccess(items))
    const details = yield call(getItemsCategories, `?id=${items[0].id}`)
    yield put(getItemDetailsSuccess(details))
  } catch (error) {
    console.error(error)
  }
}

export function* getItemDetailsSaga(data) {
  try {
    console.log("getItemDetailsSaga::", data.payload)
    const details = yield call(getItemsCategories, `?id=${data.payload}`)
    console.log("details", details)
    yield put(getItemDetailsSuccess(details))
  } catch (error) {
    console.error(error)
  }
}

export function* createMenuItems(data) {
  try {
    const response = yield call(createMenuItem, data);
    if (response) {
      yield call(updateLocation, URLS.MENU);
    }
  } catch (error) {
    console.error(error)
  }
}
