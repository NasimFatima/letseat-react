import React, { useEffect } from 'react';
import { CustomTable } from '../Table/Table'
import { Button, GridContainer } from './styles';
import { CreateEmployee } from './CreateEmployee'
import { MenuBar } from '../MenuBar'
import { useDispatch, useSelector } from 'react-redux';
import { getAllEmployees, showCreateEmployeeForm } from '../../redux'
import { getRole } from '../../utils/common'

export const Employee = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  const role = getRole(user)

  const data = useSelector(state => state.employee);
  const employee_data = data.employees
  const showForm = data.uI.showForm
  useEffect(() => {
    dispatch(getAllEmployees(`?groups=Employee`));
  }, []);

  const handleClick = () => {
    dispatch(showCreateEmployeeForm({ showForm: true, createModalOpen: true }))
  }

  const headers = [{ title: 'First Name', key: 'firstName' }, { title: 'Last Name', key: 'lastName' }, { title: 'Email', key: 'email' },
  { title: 'User Name', key: 'username' }, { title: 'Super User', key: 'isSuperuser' }, { title: 'Role', key: 'role' }]
  return (
    <div>
      <MenuBar />
      <GridContainer>
        <h1>Employee</h1>
        {(role === 'Admin' || user.isSuperuser === 'true') && <Button onClick={handleClick}>Add Employee</Button>}
        {showForm && <CreateEmployee status={showForm} />}
      </GridContainer>
      <CustomTable tableHeaderColor="primary" tableHead={headers} tableData={employee_data} />
    </div>
  )
}

