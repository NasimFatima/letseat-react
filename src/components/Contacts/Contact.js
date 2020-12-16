import React from 'react';
import { Link } from 'react-router-dom'
// import { Headers } from '../Header'

export const Contacts = () => {
  return (
    <div>
      {/* <Headers /> */}
      <Link to='/auth/login'>Login</Link> <br /> <br />
      <Link to='/auth/register'>Signup</Link>
    </div>
  )
}
