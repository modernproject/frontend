import React from 'react'
import { connect } from 'react-redux'
import RegistrationComponent from '../components/RegistrationComponent'

class RegistrationContainer extends React.Component {
  render() {
    return <RegistrationComponent />
  }
}

function mapStateToProps(state, ownProps) {
  return {}
}

export default connect(mapStateToProps)(RegistrationContainer)
