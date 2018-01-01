import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import NavBarDropdownComponent from '../components/NavBarDropdownComponent'
import { logoutAction, updateDropDown } from '../actions'
import { push } from 'react-router-redux'

class NavBarDropdownContainer extends React.Component {
    static propTypes = {
        user: PropTypes.object.isRequired,
        displayDropDown: PropTypes.bool.isRequired
    }

    handleOnClick = () => {
        this.props.dispatch(updateDropDown())
    }

    handleOnClickSignOut = () => {
        this.props.dispatch(logoutAction())
    }

    handleClickRoute = uri => {
        this.props.dispatch(push(uri))
    }

    render() {
        return (
            <NavBarDropdownComponent
                handleOnClick={this.handleOnClick}
                handleOnClickSignOut={this.handleOnClickSignOut}
                handleClickRoute={this.handleClickRoute}
                {...this.props}
            />
        )
    }
}

function mapStateToProps(state, ownProps) {
    const displayDropDown = state.global.displayDropDown
    return { displayDropDown }
}

export default connect(mapStateToProps)(NavBarDropdownContainer)
