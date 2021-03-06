/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
import axios from 'axios'
import changeCaseObject from 'change-case-object'

const apiClient = (url, method = "get", data = {}, caseConversion = true) => {
  const baseURL = process.env.REACT_APP_BACKEND_URL;
  const config = {
    url: url,
    method: method,
    baseURL: baseURL
  }
  if (caseConversion)
    data = changeCaseObject.snakeCase(data)
  if (method.toLocaleLowerCase === 'get') {
    config['params'] = data
  } else {
    config['data'] = data
  }

  axios.interceptors.request.use((config) => {
    if (localStorage.token) {
      config.headers.Authorization = `JWT ${localStorage.token}`
    }
    return config;
  });

  axios.interceptors.response.use((response) => {
    response['data'] = changeCaseObject.camelCase(response.data)
    return response;
  }, (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem("token")
    }
    return Promise.reject(error);
  });
  return axios(config)
}


export default apiClient;
