import React from 'react'
import { connect } from 'react-redux'
import SubscribeComponent from '../components/SubscribeComponent'
import PaymentContainer from './PaymentContainer'

class SubscribeContainer extends React.Component {
    render() {
        return (
            <React.Fragment>
                <SubscribeComponent />
                <PaymentContainer />
            </React.Fragment>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {}
}

export default connect(mapStateToProps)(SubscribeContainer)
