import { Signup } from '../components/Signup'
import { Login } from '../components/Login'
import { Home } from '../components/Home'
import { URLS } from '../urls'
export const routes = [
  {
    path: URLS.REGISTER,
    component: Signup,
    title: 'Register',
    needsAuth: false
  },
  {
    path: URLS.LOGIN,
    component: Login,
    title: 'Login',
    needsAuth: false
  },
  {
    path: URLS.HOME,
    component: Home,
    title: 'Home',
    needsAuth: true
  }
]
