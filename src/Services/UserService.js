/* eslint-disable no-undef */
import { API_END_POINTS } from '../apiEndPoints'
import API from '../Services/axios'

export const getAllUserService = async () => {
  try {
    const response = await API(API_END_POINTS.USERS)
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

export const getAllRoles = async () => {
  try {
    let response = await API(
      API_END_POINTS.GETROLES);
    return response.data
  }
  catch (err) {
    return { 'error': err };
  }
}

export const createUser = async (data) => {
  try {
    const response = await API(API_END_POINTS.USERS, "post", data.payload, false)
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
