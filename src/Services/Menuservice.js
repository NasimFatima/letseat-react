/* eslint-disable no-undef */
import { API_END_POINTS } from '../apiEndPoints'
import API from '../Services/axios'

export const getAllMenuItems = async () => {
  try {
    let response = await API(
      API_END_POINTS.ITEMS_CATEGORY);
    return response.data
  }
  catch (err) {
    return { 'error': err };
  }
}

export const getItemsCategories = async (searchParams) => {
  try {
    let response = await API(API_END_POINTS.ITEMS_CATEGORY + searchParams);
    return response.data
  }
  catch (err) {
    return { 'error': err };
  }
}

export const createMenuItem = async (data) => {
  try {
    const response = await API(API_END_POINTS.ITEMS_CATEGORY, "post", data.payload)
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


