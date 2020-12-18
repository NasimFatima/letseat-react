/* eslint-disable react/react-in-jsx-scope */
import isAuthenticated from '../utils/isAuthenticated'
import { useHistory } from 'react-router-dom';
import { Route } from 'react-router-dom'
import { URLS } from '../urls'
import { BrowserRouter, Switch } from 'react-router-dom'
import { routes } from './index'


const RenderRoute = (route) => {
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

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        {
          routes.map((route, index) => (
            <RenderRoute {...route} key={index} />))
        }
      </Switch>
    </BrowserRouter>
  )
}
