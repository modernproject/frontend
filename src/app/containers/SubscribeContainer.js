import React from 'react'
import { connect } from 'react-redux'

class SubscribeContainer extends React.Component {
    render() {
        return <h1> Subscribe </h1>
    }
}

function mapStateToProps(state, ownProps) {
    return {}
}

export default connect(mapStateToProps)(SubscribeContainer)
