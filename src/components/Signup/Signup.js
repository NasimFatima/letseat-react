/* eslint-disable no-debugger */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signup, getRoles, createEmployee, signupError } from '../../redux/';
import { LoginWithGoogle } from '../GoogleLogin';
import { Formik, Field, ErrorMessage, Form } from 'formik';
import * as Yup from 'yup';
import { Wrapper, FormInput, Error } from '../../utils/styles';
import { TextError } from '../../utils/TextError';
import changeCaseObject from 'change-case-object'
import { getAllRoles } from '../../Services/UserService'
import PropTypes from "prop-types";
import Link from '@material-ui/core/Link';
import { URLS } from '../../urls'

export const Signup = (props) => {
  const { type } = props
  const dispatch = useDispatch();
  const state = useSelector(state => state.auth);
  const roles = state.roles
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password1: '',
    password2: '',
    phone: '',
    address: '',
    role: 0,
  };
  useEffect(() => {
    dispatch(signupError({ error: '' }))
    dispatch(getRoles())
    getAllRoles().then(res => {
      if (type === 'Create_Employee') {
        res = res.filter(item => item.name === 'Employee')
      }
      // setRoles(res)
    })
  }, []);

  const validationSchema = Yup.object({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string().email('Email is invalid').required('Email is required'),
    phone: Yup.string().matches(/^[0-9]*$/, 'Must Contain Only Number'),
    address: Yup.string().required('Address is required'),
    password1: Yup.string().required('Password is required'),
    password2: Yup.string()
      .oneOf([Yup.ref('password1'), null], 'Passwords must match')
      .required('Confirm Password is required'),
    role: Yup.string().required('Role is required'),
  });

  const onSubmit = values => {
    let { password1, password2, ...rest } = values
    rest = changeCaseObject.snakeCase(rest)
    const data = {
      password1: password1,
      password2: password2,
      ...rest
    }
    if (type === 'Create_Employee') {
      data.role = roles[0].id
      dispatch(createEmployee(data))
    } else
      dispatch(signup(data));
  };

  return (
    <Wrapper>
      {state.user.error && state.user.error.length > 0 && <Error>{state.user.error}</Error>}

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
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
            <label htmlFor="password1">Password</label>
            <Field name="password1" type="password" />
            <ErrorMessage name="password1" component={TextError} />
            <label htmlFor="password2">Confirm Password</label>
            <Field name="password2" type="password" />
            <ErrorMessage name="password2" component={TextError} />
            <Field as="select" options={roles} name="role">
              {roles.map((role, index) => (
                <option
                  key={role.id}
                  value={role.id}
                  label={role.name}
                />
              ))}
            </Field>
            <ErrorMessage name="role" component={TextError} />
            <button type="submit">Register</button>
            {type !== 'Create_Employee' && <LoginWithGoogle />}

          </FormInput>
          <Link href={URLS.LOGIN}>Already Have an Account</Link>
        </Form>
      </Formik>
    </Wrapper>
  );
};

Signup.propTypes = {
  type: PropTypes.string
};
