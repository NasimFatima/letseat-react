import React from 'react'
import { CartItems } from '../CartItems'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel';
import { Wrapper, FormInput } from '../../utils/styles';
import { Formik, Field, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { placeOrder } from '../../redux';

export const CheckOut = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.menu);
  const productsInCart = state?.cart;
  const initialValues = { paymentMethod: '1' };

  const placeOrderHandler = (values) => {
    values['orderItems'] = productsInCart
    values['totalBill'] = productsInCart.reduce((n, { price, quantity }) => n + (price * quantity), 0)
    console.log("values", values)
    dispatch(placeOrder(values))
  }

  return (
    <Wrapper>
      <h1>Cart</h1>
      <CartItems />
      <h1>Add Your Payment Method</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={placeOrderHandler}
      >
        <Form>
          <FormControl component="fieldset">
            <FormLabel component="legend">Payment Method</FormLabel>

            <div role="group" aria-labelledby="my-radio-group">
              <label>
                <Field type="radio" name="paymentMethod" value="1" />
              Cash on Delivery
            </label>
              <label>
                <Field type="radio" name="paymentMethod" value="2" />
              Card
            </label>
              <label>
                <Field type="radio" name="paymentMethod" value="3" />
              Other
            </label>
            </div>
            <FormInput>
              <button type='submit'>Order Now</button>
            </FormInput>
          </FormControl>

        </Form>
      </Formik>
    </Wrapper>
  )
}

