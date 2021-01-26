import React from 'react'
import { CartItems } from '../CartItems'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel';
import { Wrapper, FormInput } from '../../utils/styles';
import { Formik, Field, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { placeOrder } from '../../redux';
import { MenuBar } from '../MenuBar';
import Button from '@material-ui/core/Button';

export const CheckOut = () => {
  const dispatch = useDispatch();
  const initialValues = { paymentMethod: '1' };

  const placeOrderHandler = (values) => {
    values['isCheckedout'] = true
    values['paymentMethod'] = parseInt(values['paymentMethod'], 10)
    values['type'] = 'place_order'
    dispatch(placeOrder(values))
  }

  return (
    <div>
      <MenuBar />
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
                <Button variant="contained" color="secondary" type='submit'>Order Now</Button>
              </FormInput>
            </FormControl>

          </Form>
        </Formik>
      </Wrapper>
    </div>
  )
}

