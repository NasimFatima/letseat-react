import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { login } from '../../redux/';
import API from '../../Services/axios';
import { LoginWithGoogle } from '../GoogleLogin';
import { useHistory } from 'react-router-dom';
import { URLS } from '../../urls';
import { Paper, CustomForm } from './style';

export const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    API.post(`users/login/`, loginForm)
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

  const setFormValues = e => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Paper>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <CustomForm>
          <form>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                type="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={loginForm.email || ''}
                onChange={setFormValues}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                autoComplete="password"
                value={loginForm.password || ''}
                onChange={setFormValues}
              />
            </Grid>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleLogin}
            >
              Sign Up
            </Button>
            <LoginWithGoogle />
          </form>
        </CustomForm>
      </Paper>
    </Container>
  );
};
