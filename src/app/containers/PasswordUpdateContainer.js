import React from 'react'
import { connect } from 'react-redux'
import PasswordUpdateComponent from '../components/PasswordUpdateComponent'

class PasswordUpdateContainer extends React.Component {
    render() {
        return <PasswordUpdateComponent {...this.props} />
    }
}

function mapStateToProps(state, ownProps) {
    const email = state.user.email
    return { email }
}

export default connect(mapStateToProps)(PasswordUpdateContainer)
