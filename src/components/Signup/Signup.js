/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Textinput from '@material-ui/core/Textinput';
// import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
// import Container from '@material-ui/core/Container';
import { useDispatch } from 'react-redux';
import { signup } from '../../redux/';
import API from '../../Services/axios';
import { LoginWithGoogle } from '../GoogleLogin';
import { useHistory } from 'react-router-dom';
import { URLS } from '../../urls';
import { getAllRoles } from '../../utils/common';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { CustomForm, Wrapper, FormInput, Error } from '../../utils/styles'


export const Signup = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  // const [signupForm, setSignupForm] = useState({});
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    getAllRoles().then(res => {
      setRoles(
        res.map(item => ({ value: item.id, label: item.name }))
      );
      console.log(roles)
    });
  }, []);

  const submitSignupForm = (formData) => {
    console.warn('state:::', formData);
    API.post(`users/registration/`, formData)
      .then(res => {
        localStorage.token = res.data.token;
        dispatch(signup(res.data.user));
        history.push(URLS.HOME);
      })
      .catch(err => {
        console.error('ERROR IN SIGNUP FORM');
      });
  };
  const formik = useFormik({
    initialValues: { first_name: '', last_name: '', email: '', password1: '', password2: '', phone: '', address: '', role: -1 },
    validationSchema: Yup.object({
      first_name: Yup.string()
        .required('First Name is required'),
      last_name: Yup.string()
        .required('Last Name is required'),
      email: Yup.string()
        .email('Email is invalid')
        .required('Email is required'),
      phone: Yup.string()
        .matches(/^[0-9]*$/, "Must Contain Only Number"),
      password1: Yup.string()
        .required('Password is required'),
      password2: Yup.string()
        .oneOf([Yup.ref('password1'), null], 'Passwords must match')
        .required('Confirm Password is required'),
      role: Yup.string()
        .required('Role is required'),
    }),
    onSubmit: async (values) => {
      console.log("valuesss:::", values)
      submitSignupForm(values)
    },
  });

  return (
    <Wrapper>
      <CustomForm onSubmit={formik.handleSubmit}>
        <h1>Register New Account</h1>
        <FormInput>
          <label htmlFor="first_name">First Name</label>
          <input
            name="first_name"
            value={formik.values.first_name}
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.first_name && formik.errors.first_name ? (
            <Error>
              {formik.errors.first_name}
            </Error>
          ) : null}
        </FormInput>
        <FormInput>
          <label htmlFor="last_name">Last Name</label>
          <input
            name="last_name"
            value={formik.values.last_name}
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.last_name && formik.errors.last_name ? (
            <Error>
              {formik.errors.last_name}
            </Error>
          ) : null}
        </FormInput>
        <FormInput>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            value={formik.values.email}
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <Error>
              {formik.errors.email}
            </Error>
          ) : null}
        </FormInput>
        <FormInput>
          <label htmlFor="Phone">Phone</label>
          <input
            name="phone"
            value={formik.values.phone}
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <Error>
              {formik.errors.phone}
            </Error>
          ) : null}
        </FormInput>
        <FormInput>
          <label htmlFor="Adress">Adress</label>
          <input
            name="address"
            value={formik.values.address}
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </FormInput>
        <FormInput>
          <label htmlFor="password1">Password</label>
          <input
            name="password1"
            value={formik.values.password1}
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password1 && formik.errors.password1 ? (
            <Error>
              {formik.errors.password1}
            </Error>
          ) : null}
        </FormInput>
        <FormInput>
          <label htmlFor="password2">Confirm Password</label>
          <input
            name="password2"
            value={formik.values.password2}
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password2 && formik.errors.password2 ? (
            <Error>
              {formik.errors.password2}
            </Error>
          ) : null}
        </FormInput>
        <FormInput>
          <label htmlFor="role">Select Role</label>
          <select
            options={roles}
            name="role"
            value={formik.values.role}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            style={{ display: 'block' }}
          >
            {roles.map((role, index) => (
              <option key={role.value} value={role.value} label={role.label} />))}
          </select>
          {formik.touched.role && formik.errors.role ? (
            <Error>
              {formik.errors.role}
            </Error>
          ) : null}
        </FormInput>
        <FormInput>
          <button type="submit"> Register</button>
          <LoginWithGoogle />
        </FormInput>
      </CustomForm>
    </Wrapper>
  );
};
