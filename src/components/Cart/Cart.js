import React, { useEffect } from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { useDispatch, useSelector } from 'react-redux';
import { setUIValues, getCartItems } from '../../redux';
import { URLS } from '../../urls'
import { CartItems } from '../CartItems'
import { updateLocation } from '../../utils/common'
import { CartModal, CartBody, CheckoutButton } from './styles'

export const Cart = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setUIValues({ showCartModalOpen: true }));
    dispatch(getCartItems())

  }, []);

  const state = useSelector(state => state.menu);
  const productsInCart = state?.cart;
  const cartModalOpen = state.uI.showCartModalOpen;

  const handleClose = () => {
    dispatch(setUIValues({ showCartModalOpen: false }));
  };
  return (
    <div>
      <CartModal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={cartModalOpen}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={cartModalOpen}>
          <CartBody>
            <h2>Cart</h2>
            <p>Start Adding Items to your Cart</p>
            <CartItems />


            {productsInCart.length > 0 ?

              <CheckoutButton variant="contained" color="primary" onClick={() => { updateLocation(URLS.CHECKOUT) }}>
                Proceed to CheckOut
      </CheckoutButton>
              : null}
          </CartBody>
        </Fade>
      </CartModal>
    </div>
  );
};
