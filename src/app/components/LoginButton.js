import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import Button from '../styled_components/Button'

class LoginButton extends React.Component {
    handleClick = () => {
        const { dispatch } = this.props
        dispatch(push('/login'))
    }
    render() {
        return <Button onClick={this.handleClick}>LOGIN</Button>
    }
}

function mapStateToProps(state, ownProps) {
    return {}
}

export default connect(mapStateToProps)(LoginButton)
