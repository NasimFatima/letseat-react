import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/';
import API from '../../Services/axios';
import { LoginWithGoogle } from '../GoogleLogin';
import { useHistory } from 'react-router-dom';
import { URLS } from '../../urls';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { CustomForm, Wrapper, FormInput, Error } from '../../utils/styles'

export const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState('');

  const submitLoginForm = (LoginData) => {
    API.post(`users/login/`, LoginData)
      .then(res => {
        if (res.data.Success) {
          localStorage.token = res.data.token;
          dispatch(login(res.data.user));
          history.push(URLS.HOME);
          setErrorMessage('');
        } else {
          setErrorMessage(res.data.error);
        }
        console.error('error msg', errorMessage);
      })
      .catch(err => {
        console.error('ERROR IN LOGIN FORM', err);
      });
  };
  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Email is invalid')
        .required('Email is required'),
      password: Yup.string()
        .required('Password is required'),
    }),
    onSubmit: async (values) => {
      submitLoginForm(values)
    },
  });

  return (

    <Wrapper>
      <CustomForm onSubmit={formik.handleSubmit}>
        <h1>Login to Your Account</h1>
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
          <label htmlFor="password">Password</label>
          <input
            name="password"
            value={formik.values.password1}
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password1 && formik.errors.password1 ? (
            <Error>
              {formik.errors.first_name}
            </Error>
          ) : null}
        </FormInput>
        <FormInput>
          <button type="submit"> Login</button>
          <LoginWithGoogle />
        </FormInput>
      </CustomForm>
    </Wrapper>
  );
};
