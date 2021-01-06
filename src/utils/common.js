import API from '../Services/axios';
import { API_END_POINTS } from '../apiEndPoints'
import history from './myHistory';

export const updateLocation = url => {
  history.push(url);
};

export const getAllRoles = async () => {
  let response = await API(
    API_END_POINTS.GETROLES);
  return response.data

}

