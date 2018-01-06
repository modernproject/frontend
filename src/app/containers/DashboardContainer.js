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
        if (this.props.categories.length > 0 && this.props.posts.length > 0) {
            return (
                <DashboardComponent
                    handleClick={this.handleClick}
                    {...this.props}
                />
            )
        } else {
            return null
        }
    }
}

function mapStateToProps(state, ownProps) {
    const categories = state.categories
    const posts = state.posts
    return { categories, posts }
}

export default connect(mapStateToProps)(DashboardContainer)
