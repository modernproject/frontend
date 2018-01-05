import React from 'react'
import { connect } from 'react-redux'
import UserFormComponent from '../components/UserFormComponent'

class UserFormContainer extends React.Component {
    render() {
        return <UserFormComponent {...this.props} />
    }
}

function mapStateToProps(state, ownProps) {
    const user = state.user ? state.user : {}
    return {
        user
    }
}

export default connect(mapStateToProps)(UserFormContainer)
