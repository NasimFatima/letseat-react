import { Signup } from '../components/Signup'
import { Login } from '../components/Login'
import { Home } from '../components/Home'
import { URLS } from '../urls'
import { menuBarRoutes } from '../sideBarItems'
import { CreateEmployee } from '../components/Employees/CreateEmployee'
import { AddMenuItem } from '../components/Menu/AddItem'

const internalRoutes = [
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
  },
  {
    path: URLS.CREATE_EMPLOYEE,
    component: CreateEmployee,
    title: 'Create Employee',
    needsAuth: true
  },
  {
    path: URLS.ADD_MENU_ITEM,
    component: AddMenuItem,
    title: 'Add Menu Item',
    needsAuth: true
  }
]
export const routes = internalRoutes.concat(menuBarRoutes)
