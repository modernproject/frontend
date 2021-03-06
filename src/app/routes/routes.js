import DashboardContainer from '../containers/DashboardContainer'
import AboutContainer from '../containers/AboutContainer'
import SubscribeContainer from '../containers/SubscribeContainer'
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
    path: '/help',
    exact: true,
    Component: AboutContainer,
    Layout: NavBarLayout
  },
  {
    path: '/subscribe',
    exact: true,
    Component: SubscribeContainer,
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
    Layout: NavBarLayout,
    authenticated: true
  },
  {
    path: '/settings/user',
    exact: true,
    Component: UserFormContainer,
    Layout: NavBarLayout,
    authenticated: true
  },
  {
    path: '/settings/password',
    exact: true,
    Component: PasswordUpdateContainer,
    Layout: NavBarLayout,
    authenticated: true
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
