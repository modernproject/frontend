import React from 'react'
import { connect } from 'react-redux'
import BackButtonComponent from '../components/BackButtonComponent'
import { history } from '../../index.js'

class BackButtonContainer extends React.Component {
    handleClick = () => {
        history.goBack()
    }

    render() {
        return <BackButtonComponent handleClick={this.handleClick} />
    }
}

function mapStateToProps(state, ownProps) {
    return {}
}

export default connect(mapStateToProps)(BackButtonContainer)
