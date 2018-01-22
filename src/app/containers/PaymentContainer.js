import React from 'react'
import { connect } from 'react-redux'

class PaymentContainer extends React.Component {
    render() {
        return <h1>Stripe Payments</h1>
    }
}

function mapStateToProps(state, ownProps) {
    return {}
}

export default connect(mapStateToProps)(PaymentContainer)
