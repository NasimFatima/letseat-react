import { EMPLOYEE_Types } from '../Types/EmployeeTypes'

const initial_state = {
  employees: [],
  uI: {}
}


export const employeeReducer = (state = initial_state, action) => {

  const payload = action.payload
  switch (action.type) {
    case EMPLOYEE_Types.GET_EMPLOYEES_SUCCESS:
      return { ...state, employees: payload };
    case EMPLOYEE_Types.SHOW_CREATE_EMPLOYEE_FROM:
      return { ...state, uI: { ...state.uI, ...payload } };
    case EMPLOYEE_Types.CREATE_EMPLOYEE_MODAL_OPEN:
      return { ...state, uI: { ...state.uI, ...payload } };
    default:
      return state;
  }
};

