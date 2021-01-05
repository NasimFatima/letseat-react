import { put, call } from 'redux-saga/effects';
import { getAllUserService, createUser } from '../Services/UserService'
import { showCreateEmployeeForm, getAllEmployeesSuccess, toggleCreateEmployeeModal, signupError } from '../redux'


export function* getEmployeesSaga() {
  try {
    yield put(showCreateEmployeeForm({ 'showForm': false, }))
    const response = yield call(getAllUserService);
    response.map(item => {
      item.is_superuser = String(item.is_superuser)
      item.role = item.groups[0]?.name
    })
    yield put(getAllEmployeesSuccess(response))
  } catch (error) {
    console.error(error)
  }
}

export function* createEmployeesSaga(data) {
  try {
    const response = yield call(createUser, data);
    if (response.Success) {
      yield put(toggleCreateEmployeeModal({ createModalOpen: false }))

    } else {
      console.log(response.Error[Object.keys(response.Error)[0]])
      yield put(signupError({ error: response.Error[Object.keys(response.Error)[0]] }))
    }
  } catch (error) {
    yield put(signupError({ error: error }));
  }
}
