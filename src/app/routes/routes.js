import DashboardContainer from '../containers/DashboardContainer'
import AboutContainer from '../containers/AboutContainer'
import ArticleContainer from '../containers/ArticleContainer'
import LoginContainer from '../containers/LoginContainer'
import RegistrationContainer from '../containers/RegistrationContainer'
import SettingsContainer from '../containers/SettingsContainer'
import UserFormContainer from '../containers/UserFormContainer'
import EmailConfirmationContainer from '../containers/EmailConfirmationContainer'
import PasswordResetContainer from '../containers/PasswordResetContainer'
import PasswordUpdateContainer from '../containers/PasswordUpdateContainer'

import NavBarLayout from '../layouts/NavBarLayout'
import NavBarFooterLayout from '../layouts/NavBarFooterLayout'

export const routes = [
  {
    path: '/',
    exact: true,
    Component: DashboardContainer,
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
    path: '/settings/',
    exact: true,
    Component: SettingsContainer,
    Layout: NavBarLayout
  },
  {
    path: '/settings/user',
    exact: true,
    Component: UserFormContainer,
    Layout: NavBarLayout
  },
  {
    path: '/settings/password',
    exact: true,
    Component: PasswordUpdateContainer,
    Layout: NavBarLayout
  },
  {
    path: '/article/:articleSlug',
    exact: true,
    Component: ArticleContainer,
    Layout: NavBarLayout
  },
  {
    path: '/registration/account-confirm-email/:key',
    exact: true,
    Component: EmailConfirmationContainer,
    Layout: NavBarLayout
  },
  {
    path: '/password-reset/confirm/:uid/:token',
    exact: true,
    Component: PasswordResetContainer,
    Layout: NavBarLayout
  }
]
