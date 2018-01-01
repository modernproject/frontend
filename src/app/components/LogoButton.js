import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import Button from '../styled_components/Button'

class LogoButton extends React.Component {
    handleClick = () => {
        const { dispatch } = this.props
        dispatch(push('/'))
    }
    render() {
        return <Button onClick={this.handleClick}>Modern Project</Button>
    }
}

function mapStateToProps(state, ownProps) {
    return {}
}

export default connect(mapStateToProps)(LogoButton)
