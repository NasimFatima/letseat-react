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


export const getOrders = async () => {
  try {
    let response = await API(API_END_POINTS.ORDERS);
    return response.data
  }
  catch (err) {
    return { 'error': err };
  }
}
