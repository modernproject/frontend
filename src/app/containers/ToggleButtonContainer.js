import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ToggleButtonComponent from '../components/ToggleButtonComponent'
import { updateSideBar } from '../actions'

class NavBarDropdownContainer extends React.Component {
    handleClick = () => {
        this.props.dispatch(updateSideBar())
    }

    render() {
        return <ToggleButtonComponent handleClick={this.handleClick} />
    }
}

function mapStateToProps(state, ownProps) {}

export default connect(mapStateToProps)(NavBarDropdownContainer)
