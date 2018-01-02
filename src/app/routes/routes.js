import IndexContainer from '../containers/IndexContainer'
import AboutContainer from '../containers/AboutContainer'
import LoginContainer from '../containers/LoginContainer'
import RegistrationContainer from '../containers/RegistrationContainer'
import DashboardContainer from '../containers/DashboardContainer'
import SettingsContainer from '../containers/SettingsContainer'
import UserFormComponent from '../components/UserFormComponent'

import NavBarLayout from '../layouts/NavBarLayout'
import NavBarFooterLayout from '../layouts/NavBarFooterLayout'

export const routes = [
  {
    path: '/',
    exact: true,
    Component: IndexContainer,
    Layout: NavBarLayout
  },
  {
    path: '/about',
    exact: true,
    Component: AboutContainer,
    Layout: NavBarLayout
  },
  {
    path: '/login',
    exact: true,
    Component: LoginContainer,
    Layout: NavBarLayout
  },
  {
    path: '/signup',
    exact: true,
    Component: RegistrationContainer,
    Layout: NavBarLayout
  },
  {
    path: '/settings',
    exact: true,
    Component: SettingsContainer,
    Layout: NavBarLayout
  },
  {
    path: '/settings/user',
    exact: true,
    Component: UserFormComponent,
    Layout: NavBarLayout
  }
]
