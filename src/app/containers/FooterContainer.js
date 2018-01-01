import React from 'react'
import { connect } from 'react-redux'
import FooterComponent from '../components/FooterComponent'

class FooterContainer extends React.Component {
  render() {
    return <FooterComponent />
  }
}

function mapStateToProps(state, ownProps) {
  return {}
}

export default connect(mapStateToProps)(FooterContainer)
