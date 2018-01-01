import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import SideBarComponent from '../components/SideBarComponent'

class SideBarContainer extends React.Component {
    render() {
        return <SideBarComponent {...this.props} />
    }
}

function mapStateToProps(state, ownProps) {
    const displaySideBar = state.global.displaySideBar
    return {
        displaySideBar
    }
}

export default connect(mapStateToProps)(SideBarContainer)
