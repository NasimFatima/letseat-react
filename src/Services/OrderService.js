import { API_END_POINTS } from '../apiEndPoints'
import API from '../Services/axios'

export const placeOrder = async (data) => {
  try {
    const response = await API(API_END_POINTS.ORDERS, "post", data.payload)
    if (response.data) {
      return response.data
    } else {
      return { 'error': response.data.error };
    }
  }
  catch (err) {
    return { 'error': err };
  }
}


export const getOrders = async (url) => {
  try {
    let response = await API(url);
    const data = response.data.data
    data.map(order => {
      order.order.map(item => {
        item['size'] = item?.itemCategory?.size
        item['category'] = item?.itemCategory?.itemCategory.name
        item['item'] = item?.itemCategory?.itemCategory.menuItem.name
      })
    })
    return data
  }
  catch (err) {
    return { 'error': err };
  }
}


export const updateOrder = async (data) => {
  try {
    const response = await API(`${API_END_POINTS.ORDERS}${data.payload.id}/change_order_status/`, "post", data.payload)
    if (response.data) {
      return response.data
    } else {
      return { 'error': response.data.error };
    }
  }
  catch (err) {
    return { 'error': err };
  }
}
