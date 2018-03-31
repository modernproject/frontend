import React from 'react'
import { Route } from 'react-router'
import PrivateRoute from './PrivateRoute'

export function renderRoutes(routes) {
  return routes.map(({ Layout, Component, path, exact, authenticated }) => {
    return authenticated ? (
      <PrivateRoute
        key={path}
        Layout={Layout}
        Component={Component}
        path={path}
        exact={exact}
      />
    ) : (
      <Route
        key={path}
        path={path}
        exact={exact}
        render={props => (
          <Layout {...props}>
            <Component {...props} />
          </Layout>
        )}
      />
    )
  })
}
