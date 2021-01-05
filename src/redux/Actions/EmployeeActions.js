
import { EMPLOYEE_Types } from '../Types/EmployeeTypes'

export const getAllEmployees = () => {
  return {
    type: EMPLOYEE_Types.GET_EMPLOYEES,
  };
}

export const getAllEmployeesSuccess = data => {
  return {
    type: EMPLOYEE_Types.GET_EMPLOYEES_SUCCESS,
    payload: data
  };
}

export const showCreateEmployeeForm = data => {
  return {
    type: EMPLOYEE_Types.SHOW_CREATE_EMPLOYEE_FROM,
    payload: data
  };
}

export const toggleCreateEmployeeModal = data => {
  return {
    type: EMPLOYEE_Types.CREATE_EMPLOYEE_MODAL_OPEN,
    payload: data
  };
}

export const createEmployee = data => {
  return {
    type: EMPLOYEE_Types.CREATE_EMPLOYEE,
    payload: data
  };
}
