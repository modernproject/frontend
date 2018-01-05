import React from 'react'
import { connect } from 'react-redux'
import PasswordResetComponent from '../components/PasswordResetComponent'

class PasswordResetContainer extends React.Component {
    render() {
        return <PasswordResetComponent {...this.props} />
    }
}

function mapStateToProps(state, ownProps) {
    const uid = ownProps.match.params.uid
    const token = ownProps.match.params.token
    return { uid, token }
}

export default connect(mapStateToProps)(PasswordResetContainer)
