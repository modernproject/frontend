import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import HomePageComponent from '../components/HomePageComponent'
import DashboardContainer from '../containers/DashboardContainer'

class IndexContainer extends React.Component {
    static propTypes = {
        user: PropTypes.object.isRequired
    }
    render() {
        const { user } = this.props
        if (Object.keys(user).length > 0) {
            return <DashboardContainer />
        } else {
            return <HomePageComponent />
        }
    }
}

function mapStateToProps(state, ownProps) {
    const user = state.user
    return {
        user
    }
}

export default connect(mapStateToProps)(IndexContainer)
