import API from '../Services/axios';
import { URLS } from '../urls'
import history from './myHistory';

export const updateLocation = url => {
  history.push(url);
};

export const getAllRoles = async () => {
  let response = await API.get(
    URLS.GETROLES);
  return response.data.data

}

