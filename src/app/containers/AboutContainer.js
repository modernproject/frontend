import React from 'react'
import { connect } from 'react-redux'

class AboutContainer extends React.Component {
  render() {
    return <h1> AboutContainer </h1>
  }
}

function mapStateToProps(state, ownProps) {
  return {}
}

export default connect(mapStateToProps)(AboutContainer)
