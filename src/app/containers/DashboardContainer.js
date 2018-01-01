import React from 'react'
import { connect } from 'react-redux'

import DashboardComponent from '../components/DashboardComponent'

class DashboardContainer extends React.Component {
    render() {
        return <DashboardComponent />
    }
}

function mapStateToProps(state, ownProps) {
    return {}
}

export default connect(mapStateToProps)(DashboardContainer)
