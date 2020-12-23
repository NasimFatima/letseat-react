import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/';
import { LoginWithGoogle } from '../GoogleLogin';
import { Formik, Field, ErrorMessage, Form } from 'formik';
import * as Yup from 'yup';
import { Wrapper, FormInput, Error } from '../../utils/styles';
import { TextError } from '../../utils/TextError';

export const Login = () => {
  const dispatch = useDispatch();
  const error = useSelector(state => state.auth.user.error);

  const initialValues = { email: '', password: '' };
  const validationSchema = Yup.object({
    email: Yup.string().email('Email is invalid').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const onSubmit = values => {
    dispatch(login(values));
  };

  return (
    <Wrapper>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <h1>Login to Your Account</h1>
          {error && error.length > 0 && <Error>{error}</Error>}

          <FormInput>
            <label htmlFor="email">Email</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" component={TextError} />
            <label htmlFor="password">Password</label>
            <Field name="password" type="password" />
            <ErrorMessage name="password" component={TextError} />
            <button type="submit">Login</button>
            <LoginWithGoogle />
          </FormInput>
        </Form>
      </Formik>
    </Wrapper>
  );
};
