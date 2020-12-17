/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom'
// import { register } from '../../context/actions/register';
import { Form, Button, Grid, Header, Segment } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { signup } from '../../redux/'
import axiosInstance from '../../Services/axios';
import { LoginWithGoogle } from '../GoogleLogin'
import { useHistory } from 'react-router-dom';
import { URLS } from '../../urls'
import { getAllRoles } from '../../utils/common'


export const Signup = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [signupForm, setSignupForm] = useState({})
  const [roles, setRoles] = useState([])

  useEffect(() => {
    getAllRoles()
      .then((res) => {
        setRoles(res.map(item => ({ key: item.id, value: item.id, text: item.name })))
      })
  }, [])

  const handleSignup = () => {
    console.warn("state:::", signupForm)
    axiosInstance.post(`users/registration/`, signupForm)
      .then(res => {
        localStorage.token = res.data.token
        dispatch(signup(res.data.user))
        history.push(URLS.HOME)
      })
      .catch(err => {
        console.error("ERROR IN SIGNUP FORM")
      })
  }

  const setFormValues = (e, { name, value }) => {
    setSignupForm({ ...signupForm, [name]: value })
  }


  return (
    <div>
      <Grid centered>
        <Grid.Column style={{ maxWidth: 550, marginTop: 20 }}>
          <Header>Create a New Account</Header>

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
              <Form.Field>
                <Form.Dropdown
                  placeholder='Select Role'
                  fluid
                  required={true}
                  selection
                  options={roles}
                  label='Role'
                  name='role'
                  value={signupForm.role || ''}
                  onChange={setFormValues}
                />
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
            <LoginWithGoogle />
          </Segment>
        </Grid.Column>
      </Grid>
    </div >
  )
}
