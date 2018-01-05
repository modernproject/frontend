import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import Button from '../styled_components/Button'

class RegistrationButton extends React.Component {
    handleClick = () => {
        const { dispatch } = this.props
        dispatch(push('/signup'))
    }
    render() {
        return <Button onClick={this.handleClick}>Sign Up</Button>
    }
}

function mapStateToProps(state, ownProps) {
    return {}
}

export default connect(mapStateToProps)(RegistrationButton)
