/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signup, getRoles } from '../../redux/';
import { LoginWithGoogle } from '../GoogleLogin';
// import { getAllRoles } from '../../utils/common';
import { Formik, Field, ErrorMessage, Form } from 'formik';
import * as Yup from 'yup';
import { Wrapper, FormInput, Error } from '../../utils/styles';
import { TextError } from '../../utils/TextError';
import changeCaseObject from 'change-case-object'

export const Signup = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.auth);
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confrimPassword: '',
    phone: '',
    address: '',
    role: -1,
  };

  useEffect(() => {
    dispatch(getRoles())
  }, []);

  const validationSchema = Yup.object({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string().email('Email is invalid').required('Email is required'),
    phone: Yup.string().matches(/^[0-9]*$/, 'Must Contain Only Number'),
    address: Yup.string().required('Address is required'),
    password: Yup.string().required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
    role: Yup.string().required('Role is required'),
  });
  const handleSubmit = values => {
    dispatch(signup(changeCaseObject.snakeCase(values)));
  };

  return (
    <Wrapper>
      {state.user.error && state.user.error.length > 0 && <Error>{state.user.error}</Error>}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <FormInput>
            <label htmlFor="firstName">First Name</label>
            <Field name="firstName" type="text" />
            <ErrorMessage name="firstName" component={TextError} />
            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" type="text" />
            <ErrorMessage name="lastName" component={TextError} />
            <label htmlFor="email">Email Address</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" component={TextError} />
            <label htmlFor="phone">Phone</label>
            <Field name="phone" type="text" />
            <ErrorMessage name="phone" component={TextError} />
            <label htmlFor="address">Address</label>
            <Field name="address" type="text" />
            <ErrorMessage name="address" component={TextError} />
            <label htmlFor="password">Password</label>
            <Field name="password" type="password" />
            <ErrorMessage name="password" component={TextError} />
            <label htmlFor="confrimPassword">Confirm Password</label>
            <Field name="confrimPassword" type="password" />
            <ErrorMessage name="confrimPassword" component={TextError} />
            <Field as="select" options={state.roles} name="role">
              {console.log("state.roles::::::::", state.roles)}
              {state.roles.map((role, index) => (
                <option
                  key={role.id}
                  value={role.id}
                  label={role.name}
                />
              ))}
            </Field>
            <ErrorMessage name="role" component={TextError} />
            <button type="submit">Register</button>
            <LoginWithGoogle />
          </FormInput>
        </Form>
      </Formik>
    </Wrapper>
  );
};
