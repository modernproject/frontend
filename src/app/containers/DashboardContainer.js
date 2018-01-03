import React from 'react'
import { connect } from 'react-redux'
import { postsRequest } from '../actions'
import { push } from 'react-router-redux'

import DashboardComponent from '../components/DashboardComponent'

class DashboardContainer extends React.Component {
    componentDidMount() {
        this.props.dispatch(postsRequest())
    }

    handleClick = slug => {
        this.props.dispatch(push('article/' + slug))
    }

    render() {
        return (
            <DashboardComponent
                handleClick={this.handleClick}
                {...this.props}
            />
        )
    }
}

function mapStateToProps(state, ownProps) {
    const posts = state.posts
    return { posts }
}

export default connect(mapStateToProps)(DashboardContainer)
