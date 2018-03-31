import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import NavBarDropdownComponent from '../components/NavBarDropdownComponent'
import { logoutAction, updateDropDown } from '../actions'
import { push } from 'react-router-redux'

class NavBarDropdownContainer extends React.Component {
    static propTypes = {
        displayDropDown: PropTypes.bool.isRequired
    }

    handleOnClickSignOut = () => {
        this.props.dispatch(updateDropDown())
        this.props.dispatch(logoutAction())
    }

    handleClickRoute = uri => {
        this.props.dispatch(updateDropDown())
        this.props.dispatch(push(uri))
    }

    handleClickOutside = event => {
        console.log(event)
        if (this.props.displayDropDown == true && event.target.id !== "userIcon") {
            this.props.dispatch(updateDropDown())    
        }
    }

    render() {
        return (
            <NavBarDropdownComponent
                handleOnClickSignOut={this.handleOnClickSignOut}
                handleClickRoute={this.handleClickRoute}
                handleClickOutside={this.handleClickOutside}
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
