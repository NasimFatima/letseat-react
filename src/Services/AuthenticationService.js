/* eslint-disable no-prototype-builtins */
/* eslint-disable no-debugger */

import { API_END_POINTS } from '../apiEndPoints'
import { POST } from '../Services/httpService'

export const registerUserService = async (data) => {
  try {
    const response = await POST(API_END_POINTS.REGISTER, data.payload)
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

export const loginUserService = async (data) => {
  let response = undefined
  try {
    if (data.payload.hasOwnProperty('type') && data.payload.type === 'googleLogin') {
      response = await POST(API_END_POINTS.GOOGLE_LOGIN, data.payload);
    }
    else {
      response = await POST(API_END_POINTS.LOGIN, data.payload);
    }
    if (response.data.Success) {
      localStorage.token = response.data.token;
      return response.data.user;
    } else {
      return { error: response.data.error };
    }
  } catch (err) {
    return { error: err };
  }
}
