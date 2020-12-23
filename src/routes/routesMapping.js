/* eslint-disable react/react-in-jsx-scope */
import { Router, Switch } from 'react-router-dom'
import { routes } from './index'
import history from '../utils/myHistory';
import { PrivateRoute } from './privateRoute'


export const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        {
          routes.map((route, index) => (
            <PrivateRoute {...route} key={index} />))
        }
      </Switch>
    </Router>
  )
}
