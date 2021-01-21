/*eslint-disable*/
import React, { useEffect } from 'react';
import logo from '../../assets/images/logo.png';
import { menuBarRoutes } from '../../routes/sideBarItems';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Cart } from '../Cart';
import { setUIValues, getCartItems } from '../../redux';
import { getRole, getAllowedRoutes } from '../../utils/common';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { Typograph } from '../Header/styles';
import Grid from '@material-ui/core/Grid';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Badge from '@material-ui/core/Badge';

export const MenuBar = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  const cartItems = useSelector(state => state.menu.cart)
  const role = getRole(user);
  const allowedRoutes = getAllowedRoutes(menuBarRoutes, role);

  const logout = () => {
    dispatch(logOut());
  };
  const handleClick = path => {
    history.push(path);
  };
  useEffect(() => {
    dispatch(setUIValues({ showCart: false }));
    dispatch(getCartItems())
  }, []);
  const state = useSelector(state => state.menu);

  const showModal = () => {
    dispatch(setUIValues({ showCart: true, showCartModalOpen: true }));
  };

  return (
    <div>
      <img style={{ width: '200px', height: '100px' }} src={logo} />
      <Grid container>
        <AppBar position="static">
          <Toolbar>
            {allowedRoutes.map((item, key) => {
              return (
                <Grid item>
                  <Typograph
                    variant="h6"
                    key={key}
                    onClick={() => handleClick(item.path)}
                    style={{ cursor: 'pointer' }}
                  >
                    {' '}
                    {item.title}
                  </Typograph>
                </Grid>
              );
            })}
            <Grid item xs />
            <div>
              {state.uI.showCart && <Cart />}
              <IconButton onClick={() => showModal()} color="inherit">
                <Badge badgeContent={cartItems.length} color="secondary">
                  <ShoppingCartIcon></ShoppingCartIcon>
                </Badge>
              </IconButton>
              <IconButton color="inherit" onClick={() => logout()}>
                <ExitToAppIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </Grid>
    </div>
  );
};
