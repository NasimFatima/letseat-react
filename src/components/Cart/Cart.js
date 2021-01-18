import React, { useEffect } from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { setUIValues } from '../../redux';
import Link from '@material-ui/core/Link';
import { URLS } from '../../urls'
import { CartItems } from '../CartItems'

const useStyles = makeStyles(theme => ({
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

export const Cart = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setUIValues({ showCartModalOpen: true }));
  }, []);

  const state = useSelector(state => state.menu);
  const productsInCart = state?.cart;
  const cartModalOpen = state.uI.showCartModalOpen;

  const handleClose = () => {
    dispatch(setUIValues({ showCartModalOpen: false }));
  };
  return (
    <div>
      {console.log('cartModalOpen', cartModalOpen)}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={cartModalOpen}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={cartModalOpen}>
          <div
            style={{
              backgroundColor: 'white',
              border: '2px solid #000',
              padding: '20px',
            }}
          >
            <h2 style={{ display: 'flex', alignItems: 'center' }}>Cart</h2>
            <p>Start Adding Items to your Cart</p>
            {console.log('productsInCart', productsInCart)}
            <CartItems />
            {productsInCart.length > 0 ? <Link href={URLS.CHECKOUT}>Proceed to CheckOut</Link> : null}
          </div>
        </Fade>
      </Modal>
    </div>
  );
};
