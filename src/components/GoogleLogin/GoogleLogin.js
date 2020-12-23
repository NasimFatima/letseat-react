/* eslint-disable react/react-in-jsx-scope */
import { GoogleLogin } from 'react-google-login'
import { useDispatch } from 'react-redux';
import { login } from '../../redux/'
import { FormInput } from '../../utils/styles'

export const LoginWithGoogle = () => {
  const dispatch = useDispatch();
  const successResponseGoogle = response => {
    dispatch(login({ token: response.accessToken, type: 'googleLogin' }))
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
