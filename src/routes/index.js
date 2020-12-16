import { Signup } from '../components/Signup'
import { Login } from '../components/Login'
import { Contacts } from '../components/Contacts'

export const routes = [
  {
    path: '/auth/register',
    component: Signup,
    title: 'Register'
  },
  {
    path: '/auth/login',
    component: Login,
    title: 'Login'
  },
  {
    path: '/',
    component: Contacts,
    title: 'Contact'
  }
]
