import React from 'react'
import { connect } from 'react-redux'
import LoginComponent from '../components/LoginComponent'

class LoginContainer extends React.Component {
  render() {
    return <LoginComponent />
  }
}

function mapStateToProps(state, ownProps) {
  return {}
}

export default connect(mapStateToProps)(LoginContainer)
