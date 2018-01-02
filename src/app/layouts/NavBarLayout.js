import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import GridContainer from '../styled_components/GridContainer'
import NavBarContainer from '../containers/NavBarContainer'
import MainContainer from '../styled_components/MainContainer'
import { getUserAction } from '../actions'

class NavBarLayout extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    children: PropTypes.object.isRequired
  }
  componentDidMount() {
    this.props.dispatch(getUserAction())
  }
  render() {
    const { children } = this.props
    return (
      <GridContainer>
        <NavBarContainer />
        <MainContainer full>{children}</MainContainer>
      </GridContainer>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {}
}
export default connect(mapStateToProps)(NavBarLayout)
