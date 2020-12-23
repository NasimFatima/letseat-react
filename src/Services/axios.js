/* eslint-disable no-unused-vars */
import axios from 'axios'

const baseURL = process.env.REACT_APP_BACKEND_URL;
let headers = {};
const axiosInstance = axios.create({
  baseURL: baseURL,
})

axiosInstance.interceptors.request.use((request) => {
  if (localStorage.token) {
    request.headers.Authorization = `JWT ${localStorage.token}`
  }
  return request;
});

axiosInstance.interceptors.response.use((response) => {
  return response;
}, (error) => {
  if (error.response.status === 401) {
    localStorage.removeItem("token")
  }
  return Promise.reject(error);
});


export default axiosInstance;
