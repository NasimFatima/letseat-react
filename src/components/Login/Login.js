import React, { useState } from 'react';
import { Form, Button, Grid, Header, Segment, Message } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/'
import axiosInstance from '../../Services/axios';
import { LoginWithGoogle } from '../GoogleLogin'
import { useHistory } from 'react-router-dom';
import { URLS } from '../../urls'
// import { Link } from 'react-router-dom'

export const Login = () => {

  const history = useHistory()
  const dispatch = useDispatch();
  const [loginForm, setLoginForm] = useState({ email: '', password: '' })
  const [errorMessage, setErrorMessage] = useState('')

  const handleLogin = () => {
    axiosInstance.post(`users/login/`, loginForm)
      .then(res => {
        if (res.data.Success === false) {
          setErrorMessage(res.data.error)
        }
        else {
          localStorage.token = res.data.token;
          dispatch(login(res.data.user))
          history.push(URLS.HOME)

          setErrorMessage('')
        }
        console.error("error msg", errorMessage)

      })
      .catch(err => {
        console.error("ERROR IN LOGIN FORM", err)
      })
  }

  const setFormValues = (e, { name, value }) => {
    setLoginForm({ ...loginForm, [name]: value })
  }
  return (

    <div>
      <Grid centered>
        <Grid.Column style={{ maxWidth: 550, marginTop: 20 }}>
          <Header>Login to Your Account</Header>
          <Segment>
            {errorMessage && <Message content={errorMessage} negative />}
            <Form onSubmit={handleLogin}>
              <Form.Field>
                <Form.Input type='email' placeholder='Email' label='Email' name='email' value={loginForm.email} onChange={setFormValues}></Form.Input>
              </Form.Field>
              <Form.Field>
                <Form.Input type='password' placeholder='Password' label='Password' name='password' value={loginForm.password} onChange={setFormValues}></Form.Input>
              </Form.Field>
              <Button fluid primary type='submit' disabled={!loginForm.email?.length ||
                !loginForm.password?.length}>Submit</Button>
            </Form>
            <LoginWithGoogle />
          </Segment>
        </Grid.Column>
      </Grid>
    </div >

  )
}
