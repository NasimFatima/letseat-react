import React, { useState } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom'
// import { register } from '../../context/actions/register';
import { Form, Button, Grid, Header, Segment } from 'semantic-ui-react';

export const Signup = () => {
  // useEffect(() => {
  //   register();
  // }, [])
  const [signupForm, setSignupForm] = useState({})
  let passwordNotMatch = false;
  const handleSignup = () => {
    console.warn("state:::", signupForm)
    axios.post(`http://localhost:8000/users/registration/`, signupForm)
      .then(res => {
        console.log(res.data);
      })
  }

  const setFormValues = (e, { name, value }) => {
    console.log(name)
    setSignupForm({ ...signupForm, [name]: value })
    if (name == 'password2' && signupForm.password1 != signupForm.password2)
      passwordNotMatch = 'Confirm Password is not match with password'

    console.log("password not matched", passwordNotMatch)

  }


  return (
    <div>
      <Grid centered>
        <Grid.Column style={{ maxWidth: 550, marginTop: 20 }}>
          <Header>Sign up</Header>

          <Segment>
            <Form onSubmit={handleSignup}>
              <Form.Field>
                <Form.Input type='email' placeholder='Email' label='Email' name='email' value={signupForm.email || ''} required={true} onChange={setFormValues}></Form.Input>
              </Form.Field>
              <Form.Field>
                <Form.Input type='text' placeholder='First Name' label='First Name' name='first_name' required={true} value={signupForm.first_name || ''} onChange={setFormValues}></Form.Input>
              </Form.Field>
              <Form.Field>
                <Form.Input type='text' placeholder='Last Name' label='Last Name' name='last_name' required={true} value={signupForm.last_name || ''} onChange={setFormValues}></Form.Input>
              </Form.Field>
              <Form.Field>
                <Form.Input placeholder='Phone' label='Phone' name='phone' required={true} value={signupForm.phone || ''} onChange={setFormValues}></Form.Input>
              </Form.Field>
              <Form.Field>
                <Form.Input type='text' placeholder='Address' label='Address' name='address' value={signupForm.address || ''} onChange={setFormValues}></Form.Input>
              </Form.Field>
              <Form.Field>
                <Form.Input type='password' placeholder='Password' label='Password' name='password1' required={true} value={signupForm.password1 || ''} onChange={setFormValues}></Form.Input>
              </Form.Field>
              <Form.Field>
                <Form.Input type='password' placeholder='Confirm Password' label='Confirm Password' name='password2' required={true}
                  rules={{
                    type: 'match[password]',
                    prompt: 'Passwords do not match'
                  }} value={signupForm.password2 || ''} onChange={setFormValues}></Form.Input>
              </Form.Field>
              <Button fluid primary type='submit'
                disabled={!signupForm.email?.length ||
                  !signupForm.first_name?.length ||
                  !signupForm.last_name?.length ||
                  !signupForm.phone?.length ||
                  !signupForm.password1?.length ||
                  !signupForm.password2?.length
                }>Submit</Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    </div >
  )
}
