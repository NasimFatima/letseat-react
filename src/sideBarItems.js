import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import { Home } from './components/Home'
import { Employee } from './components/Employees'
import { Menu } from './components/Menu'
export const menuBarRoutes = [
  {
    path: "/home",
    title: 'DashBoard',
    needsAuth: true,
    icon: Dashboard,
    component: Home,
  },
  {
    path: "/employee",
    title: 'Employee',
    needsAuth: true,
    icon: Person,
    component: Employee,
  },
  {
    path: "/menu",
    title: 'Menu',
    needsAuth: true,
    icon: LibraryBooks,
    component: Menu,
  }

];

