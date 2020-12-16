import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Grid, Header, Segment } from 'semantic-ui-react';
// import { Link } from 'react-router-dom'

export const Login = () => {

  const [loginForm, setLoginForm] = useState({ email: '', password: '' })

  const handleLogin = () => {
    console.warn("state:::", loginForm)
    axios.post(`http://localhost:8000/users/login/`, loginForm)
      .then(res => {
        console.log(res.data);
      })
  }

  const setFormValues = (e, { name, value }) => {
    setLoginForm({ ...loginForm, [name]: value })
  }

  return (
    <div>
      <Grid centered>
        <Grid.Column style={{ maxWidth: 550, marginTop: 20 }}>
          <Header>Login Here</Header>

          <Segment>
            <Form onSubmit={handleLogin}>
              <Form.Field>
                <Form.Input type='email' placeholder='Email' label='Email' name='email' value={loginForm.email} onChange={setFormValues}></Form.Input>
              </Form.Field>
              <Form.Field>
                <Form.Input type='password' placeholder='Password' label='Password' name='password' value={loginForm.password} onChange={setFormValues}></Form.Input>
              </Form.Field>
              <Button fluid primary type='submit'>Submit</Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    </div >

  )
}
