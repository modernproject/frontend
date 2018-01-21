import React from 'react'
import { connect } from 'react-redux'
import SubscribeComponent from '../components/SubscribeComponent'

class SubscribeContainer extends React.Component {
    render() {
        return <SubscribeComponent />
    }
}

function mapStateToProps(state, ownProps) {
    return {}
}

export default connect(mapStateToProps)(SubscribeContainer)
