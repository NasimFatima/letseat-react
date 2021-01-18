import { Signup } from '../components/Signup'
import { Login } from '../components/Login'
import { DashBoards } from '../components/Dashboard'
import { URLS } from '../urls'
import { menuBarRoutes } from './sideBarItems'
import { CreateEmployee } from '../components/Employees/CreateEmployee'
import { AddMenuItem } from '../components/Menu/AddItem'
import { CheckOut } from '../components/CheckOut'
import { Roles } from './Roles'
import { Home } from '../components/Home/Home'

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
    path: URLS.DASHBOARD,
    component: DashBoards,
    title: 'Home',
    needsAuth: true
  },
  {
    path: URLS.CREATE_EMPLOYEE,
    component: CreateEmployee,
    title: 'Create Employee',
    needsAuth: true,
    permission: [Roles.ADMIN,
    Roles.SUPER_ADMIN
    ]
  },
  {
    path: URLS.ADD_MENU_ITEM,
    component: AddMenuItem,
    title: 'Add Menu Item',
    needsAuth: true,
    permission: [Roles.ADMIN,
    Roles.SUPER_ADMIN
    ]
  },
  {
    path: URLS.CHECKOUT,
    component: CheckOut,
    title: 'Checkout',
    needsAuth: true,
    permission: [Roles.ADMIN,
    Roles.SUPER_ADMIN,
    Roles.CUSTOMER
    ]
  },
  {
    path: URLS.HOME,
    component: Home,
    title: 'Index',
    needsAuth: false
  },

]
export const routes = internalRoutes.concat(menuBarRoutes)
