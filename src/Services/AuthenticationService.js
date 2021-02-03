/* eslint-disable no-undef */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-debugger */

import { API_END_POINTS } from '../apiEndPoints'
import API from '../Services/axios'

export const registerUserService = async (data) => {
  try {
    const response = await API(API_END_POINTS.REGISTER, "post", data.payload, false)
    if (response.data.Success) {
      localStorage.token = response.data.token;
      return response.data.user
    } else {
      return { 'error': response.data.error };
    }
  }
  catch (err) {
    return { 'error': err };
  }
}

export const logOutUserService = async () => {
  try {
    const response = await API(API_END_POINTS.LOG_OUT, "post", {})
    localStorage.clear();
    return response.data

  }
  catch (err) {
    return { 'error': err };
  }
}

export const loginUserService = async (data) => {
  let response = undefined
  try {
    response = await API(API_END_POINTS.LOGIN, "post", data.payload);
    if (response.data.success) {
      localStorage.token = response.data.token;
      return response.data.user;
    } else {
      return { error: response.data.error };
    }

  } catch (err) {
    return { error: err };
  }
}
