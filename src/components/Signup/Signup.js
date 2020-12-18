/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useDispatch } from 'react-redux';
import { signup } from '../../redux/'
import API from '../../Services/axios';
import { LoginWithGoogle } from '../GoogleLogin'
import { useHistory } from 'react-router-dom';
import { URLS } from '../../urls'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { getAllRoles } from '../../utils/common'
import { Paper, CustomForm } from './style'


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
    API.post(`users/registration/`, signupForm)
      .then(res => {
        localStorage.token = res.data.token
        dispatch(signup(res.data.user))
        history.push(URLS.HOME)
      })
      .catch(err => {
        console.error("ERROR IN SIGNUP FORM")
      })
  }

  const setFormValues = (e) => {
    console.log(e.target.name)
    console.log(e.target.value)
    setSignupForm({ ...signupForm, [e.target.name]: e.target.value })
  }


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Paper>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <CustomForm>
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="first_name"
                  name="first_name"
                  variant="outlined"
                  required
                  fullWidth
                  label="First Name"
                  value={signupForm.first_name || ''}
                  autoFocus
                  onChange={setFormValues}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  label="Last Name"
                  name="last_name"
                  value={signupForm.last_name || ''}
                  autoComplete="last_name"
                  onChange={setFormValues}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  type="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={signupForm.email || ''}
                  onChange={setFormValues}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="phone"
                  label="Phone"
                  autoComplete="phone"
                  value={signupForm.phone || ''}
                  onChange={setFormValues}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="address"
                  label="Address"
                  type="text"
                  value={signupForm.address || ''}
                  autoComplete="address"
                  onChange={setFormValues}

                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password1"
                  label="Password"
                  type="password"
                  autoComplete="password1"
                  value={signupForm.password1 || ''}
                  onChange={setFormValues}

                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password2"
                  label="Confirm Password"
                  type="password"
                  autoComplete="password2"
                  value={signupForm.password2 || ''}
                  onChange={setFormValues}

                />
              </Grid>
              <Grid item xs={12}>
                <Select
                  required
                  fullWidth
                  label="Select Role"
                  onChange={setFormValues}
                  name='role'
                  value={signupForm.role || -1} >
                  {roles.map((role, index) =>
                    <MenuItem key={role.key} value={role.value}> {role.text} </MenuItem>
                  )}
                </Select>
              </Grid>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={handleSignup}
              >
                Sign Up
                </Button>
              <LoginWithGoogle />
            </Grid>
          </form>
        </CustomForm>
      </Paper>
    </Container >
  )
}

{/* <Grid centered>
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
      </Grid> */}
{/* </div > */ }
{/* ) */ }
{/* } */ }
