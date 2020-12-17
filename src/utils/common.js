import axiosInstance from '../Services/axios';
import { URLS } from '../urls'
export const getAllRoles = async () => {
  let response = await axiosInstance.get(
    URLS.GETROLES);
  return response.data.data

}
