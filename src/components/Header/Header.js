import React from 'react';
import { Menu, Image } from 'semantic-ui-react'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

export const Headers = () => {
  return (
    <div>
      <Menu secondary pointing>
        <Link to='/'><Image src={logo} width={120} /></Link>
      </Menu>
    </div>
  )

}
