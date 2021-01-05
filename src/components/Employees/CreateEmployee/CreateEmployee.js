/* eslint-disable react/prop-types */
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Signup } from '../../Signup'
import { useDispatch, useSelector } from 'react-redux';
import { toggleCreateEmployeeModal } from '../../../redux'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export const CreateEmployee = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const createModalOpen = useSelector(state => state.employee.uI.createModalOpen);

  const handleClose = () => {
    dispatch(toggleCreateEmployeeModal({ createModalOpen: false }))
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={createModalOpen}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={createModalOpen}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Create Employee</h2>
            <Signup type='Create_Employee' />
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

