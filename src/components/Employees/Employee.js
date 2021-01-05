import React, { useEffect } from 'react';
import { CustomTable } from '../Table/Table'
import { Button, GridContainer } from './styles';
import { CreateEmployee } from './CreateEmployee'
import { MenuBar } from '../MenuBar'
import { useDispatch, useSelector } from 'react-redux';
import { getAllEmployees, showCreateEmployeeForm } from '../../redux'

export const Employee = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.employee);
  const employee_data = data.employees
  const showForm = data.uI.showForm
  useEffect(() => {
    dispatch(getAllEmployees());
  }, []);

  const handleClick = () => {
    dispatch(showCreateEmployeeForm({ showForm: true, createModalOpen: true }))
  }

  const headers = [{ title: 'First Name', key: 'first_name' }, { title: 'Last Name', key: 'last_name' }, { title: 'Email', key: 'email' },
  { title: 'User Name', key: 'username' }, { title: 'Super User', key: 'is_superuser' }, { title: 'Role', key: 'role' }]
  return (
    <div>
      <MenuBar />
      <h1>Employee</h1>
      <GridContainer>
        <Button onClick={handleClick}>Add Employee</Button>
        {showForm && <CreateEmployee status={showForm} />}
      </GridContainer>
      <CustomTable tableHeaderColor="primary" tableHead={headers} tableData={employee_data} />
    </div>
  )
}

