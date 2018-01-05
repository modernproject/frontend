import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import FooterContainer from '../containers/FooterContainer'
import GridContainer from '../styled_components/GridContainer'
import NavBarContainer from '../containers/NavBarContainer'
import MainContainer from '../styled_components/MainContainer'
import { getUserAction } from '../actions'
import NavBarDropdownContainer from '../containers/NavBarDropdownContainer'

class NavBarFooterLayout extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    children: PropTypes.object.isRequired
  }

  render() {
    const { children } = this.props
    return (
      <GridContainer>
        <NavBarContainer />
        <NavBarDropdownContainer />
        <MainContainer full>{children}</MainContainer>
        <FooterContainer />
      </GridContainer>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {}
}
export default connect(mapStateToProps)(NavBarFooterLayout)
