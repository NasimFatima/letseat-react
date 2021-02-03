import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import { DashBoards } from '../components/Dashboard'
import { Employee } from '../components/Employees'
import { Menu } from '../components/Menu'
import { Orders } from '../components/Orders'
import { Roles } from './Roles'
import { URLS } from '../urls'
export const menuBarRoutes = [
  {
    path: URLS.DASHBOARD,
    title: 'DashBoard',
    needsAuth: true,
    icon: Dashboard,
    component: DashBoards,
  },
  {
    path: URLS.EMPLOYEE,
    title: 'Employee',
    needsAuth: true,
    icon: Person,
    component: Employee,
    permission: [Roles.ADMIN,
    Roles.SUPER_ADMIN
    ]
  },
  {
    path: URLS.MENU,
    title: 'Menu',
    needsAuth: true,
    icon: LibraryBooks,
    component: Menu,
  },
  {
    path: URLS.ORDER,
    title: 'Order',
    needsAuth: true,
    icon: LibraryBooks,
    component: Orders,
    permission: [Roles.ADMIN,
    Roles.SUPER_ADMIN,
    Roles.CUSTOMER
    ]
  }

];

