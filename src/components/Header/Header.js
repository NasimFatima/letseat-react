import React from 'react';
import { Menu, Image } from 'semantic-ui-react'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'


export const Headers = () => {
  return (
    <div>
      <Menu secondary pointing>
        <Image src={logo} width={120} />
        <Menu.Item position="right"> <Link to='/auth/login'>Login</Link></Menu.Item>
        <Menu.Item><Link to='/auth/register'>SignUp</Link></Menu.Item>
        <Menu.Item>Contact Us</Menu.Item>
      </Menu>
    </div>
  )

}
