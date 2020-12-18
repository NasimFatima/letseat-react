import API from '../Services/axios';
import { URLS } from '../urls'
export const getAllRoles = async () => {
  let response = await API.get(
    URLS.GETROLES);
  return response.data.data

}
