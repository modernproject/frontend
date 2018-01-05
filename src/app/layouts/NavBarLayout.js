import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import GridContainer from '../styled_components/GridContainer'
import NavBarContainer from '../containers/NavBarContainer'
import MainContainer from '../styled_components/MainContainer'
import { getUserAction } from '../actions'
import NavBarDropdownContainer from '../containers/NavBarDropdownContainer'

class NavBarLayout extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    children: PropTypes.object.isRequired
  }

  componentDidMount() {
    this.props.dispatch(getUserAction(this.props.location.pathname))
  }

  render() {
    const { children } = this.props
    return (
      <GridContainer>
        <NavBarContainer />
        <NavBarDropdownContainer />
        <MainContainer full>{children}</MainContainer>
      </GridContainer>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {}
}
export default connect(mapStateToProps)(NavBarLayout)
