/* eslint-disable no-prototype-builtins */
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

export function isArrayWithLength(arr) {
  return (Array.isArray(arr) && arr.length)
}

export const getAllowedRoutes = (routes, role) => {
  return routes.filter(({ permission }) => {
    if (!permission) return true;
    else if (!isArrayWithLength(permission)) return true;
    else return permission.includes(role)
  });
}

export const getRole = (user) => {
  let role = undefined
  if (user.hasOwnProperty('groups') && user.groups.length) {
    role = user.groups[0].name
  }
  return role
}

