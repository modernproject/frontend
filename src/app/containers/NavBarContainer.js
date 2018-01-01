import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import NavBarComponent from '../components/NavBarComponent'

class NavBarContainer extends React.Component {
    static propTypes = {
        user: PropTypes.object.isRequired
    }
    render() {
        return <NavBarComponent {...this.props} />
    }
}

function mapStateToProps(state, ownProps) {
    const user = state.user
    return {
        user
    }
}

export default connect(mapStateToProps)(NavBarContainer)
