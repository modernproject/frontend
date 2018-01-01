import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import NavBarContainer from '../containers/NavBarContainer'
import SideBarContainer from '../containers/SideBarContainer'
import GridContainer from '../styled_components/GridContainer'
import MainContainer from '../styled_components/MainContainer'
import { getUserAction, updateSideBar } from '../actions'

class NavBarSideBarLayout extends React.Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        children: PropTypes.object.isRequired,
        displaySideBar: PropTypes.bool.isRequired
    }

    componentDidMount() {
        this.props.dispatch(getUserAction())
    }

    render() {
        const { children } = this.props

        return (
            <GridContainer>
                <NavBarContainer />
                <SideBarContainer />
                <MainContainer displaySideBar={this.props.displaySideBar}>
                    {children}
                </MainContainer>
            </GridContainer>
        )
    }
}

function mapStateToProps(state, ownProps) {
    const displaySideBar = state.global.displaySideBar
    return {
        displaySideBar
    }
}
export default connect(mapStateToProps)(NavBarSideBarLayout)
