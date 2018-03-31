
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import NavBarComponent from '../components/NavBarComponent'
import { updateDropDown } from '../actions'

class NavBarContainer extends React.Component {
    static propTypes = {
        user: PropTypes.object.isRequired,
        displayDropDown: PropTypes.bool.isRequired
    }

    handleOnClick = () => {
        this.props.dispatch(updateDropDown())
    }

    render() {
        return (
            <NavBarComponent
                handleOnClick={this.handleOnClick}
                {...this.props}
            />
        )
    }
}

function mapStateToProps(state, ownProps) {
    const user = state.user
    const displayDropDown = state.global.displayDropDown
    return { user, displayDropDown }
}

export default connect(mapStateToProps)(NavBarContainer)
