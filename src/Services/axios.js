import axios from 'axios'

const baseURL = process.env.REACT_APP_BACKEND_URL;
console.log("BASE URL:::", baseURL)
let headers;
if (localStorage.token) {
  headers.Authorization = `Bearer ${localStorage.token}`
}

export const axiosInstance = axios.create({
  baseURL: baseURL,
  headers,
})
