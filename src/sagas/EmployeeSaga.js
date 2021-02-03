import { put, call } from 'redux-saga/effects';
import { getAllUserService, createUser } from '../Services/UserService'
import { showCreateEmployeeForm, getAllEmployeesSuccess, toggleCreateEmployeeModal } from '../redux'
import { toast } from "react-toastify";


export function* getEmployeesSaga(data) {
  try {
    yield put(showCreateEmployeeForm({ 'showForm': false, }))
    const response = yield call(getAllUserService, data.payload);
    response.data.map(item => {
      item.isSuperuser = String(item.isSuperuser)
      item.role = item.groups[0]?.name
    })
    yield put(getAllEmployeesSuccess(response.data))

  } catch (error) {
    console.error(error)
  }
}

export function* createEmployeesSaga(data) {
  try {
    const response = yield call(createUser, data);
    if (response.success) {
      toast.success("Employee Created Successfully")
      yield put(toggleCreateEmployeeModal({ createModalOpen: false }))

    } else {
      toast.error(response.Error[Object.keys(response.Error)[0]])
    }
  } catch (error) {
    toast.error(error)
  }
}
