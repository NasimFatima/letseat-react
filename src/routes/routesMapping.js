/* eslint-disable no-prototype-builtins */
/* eslint-disable react/react-in-jsx-scope */
import { Router, Switch } from 'react-router-dom'
import { routes } from './index'
import history from '../utils/myHistory';
import { PrivateRoute } from './privateRoute'
import { getAllowedRoutes, getRole } from '../utils/common'
import { useSelector } from 'react-redux';

export const Routes = () => {
  const user = useSelector(state => state.auth.user);
  const role = getRole(user)
  const allowedRoutes = getAllowedRoutes(routes, role)

  return (
    <Router history={history}>
      <Switch>
        {
          allowedRoutes.map((route, index) => (
            <PrivateRoute {...route} key={index} />))
        }
      </Switch>
    </Router>
  )
}
