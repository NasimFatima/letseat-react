/* eslint-disable react/react-in-jsx-scope */
import isAuthenticated from '../utils/isAuthenticated'
import { useHistory } from 'react-router-dom';
import { Route } from 'react-router-dom'
import { URLS } from '../urls'

export const RenderRoute = (route) => {
  const history = useHistory()
  document.title = route.title || "LetsEat"
  if (route.needsAuth && !isAuthenticated()) {
    history.push(URLS.LOGIN)
  }
  if (!route.needsAuth && isAuthenticated() && (location.pathname.match('/auth/login') || location.pathname.match('/auth/register'))) {
    history.push(URLS.HOME)
  }
  return <Route exact render={(props) => <route.component {...props} />}></Route>

}
