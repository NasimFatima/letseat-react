/* eslint-disable react/prop-types */
import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Signup } from '../../Signup';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCreateEmployeeModal } from '../../../redux';
import { EmployeeModal, Paper } from './styles';

export const CreateEmployee = () => {
  const dispatch = useDispatch();
  const createModalOpen = useSelector(
    state => state.employee.uI.createModalOpen
  );

  const handleClose = () => {
    dispatch(toggleCreateEmployeeModal({ createModalOpen: false }));
  };

  return (
    <div>
      <EmployeeModal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={createModalOpen}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={createModalOpen}>
          <Paper>
            <h2 id="transition-modal-title">Create Employee</h2>
            <Signup type="Create_Employee" />
          </Paper>
        </Fade>
      </EmployeeModal>
    </div>
  );
};
