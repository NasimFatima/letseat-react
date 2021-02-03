import React from 'react';
import { MenuItems } from '../MenuItems';
import logo from '../../assets/images/logo.png';
import Link from '@material-ui/core/Link';
import { URLS } from '../../urls';
import { ListItems } from './style';
import { updateLocation } from '../../utils/common'

export const Home = () => {


  return (
    <div>
      <img style={{ height: '100px', width: '200px' }} src={logo} />
      <ListItems>
        <Link onClick={() => updateLocation(URLS.REGISTER)}>Register</Link>
      </ListItems>
      <ListItems>
        <Link onClick={() => updateLocation(URLS.LOGIN)}>Login</Link>
      </ListItems>
      <div>
        <MenuItems />
      </div>
    </div>
  );
};
