/* eslint-disable react/react-in-jsx-scope */
import { GoogleLogin } from 'react-google-login'
import API from '../../Services/axios';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/'
import { URLS } from '../../urls'
import { useHistory } from 'react-router-dom';
import { FormInput } from '../../utils/styles'

export const LoginWithGoogle = () => {
  const history = useHistory()
  const dispatch = useDispatch();
  const successResponseGoogle = response => {
    API.post(`users/google/`, { token: response.accessToken })
      .then(res => {
        localStorage.token = res.data.token;
        dispatch(login(res.data.user))
        history.push(URLS.HOME)
      })
      .catch(err => {
        console.error("ERROR IN LOGIN WITH GOOGLE", err)
      })
  }
  return (
    <div>
      <GoogleLogin clientId={process.env.REACT_APP_clientId}
        buttonText="Login with google"
        render={renderProps => (
          <FormInput>
            <button onClick={renderProps.onClick}>Login With Google</button>
          </FormInput>
        )}
        onSuccess={successResponseGoogle}
        cookiePolicy={'single_host_origin'}
      ></GoogleLogin>
    </div>
  )
}
