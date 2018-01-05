import React from 'react'
import PropTypes from 'prop-types'
import Button from '../styled_components/Button'

export default class DashboardComponent extends React.Component {
    static props = {
        posts: PropTypes.object.isRequired,
        handleClick: PropTypes.func.isRequired
    }

    renderPostLinks = () => {
        const { posts } = this.props
        if (posts.length > 0) {
            return posts.map(post => {
                return (
                    <Button
                        onClick={() => {
                            this.props.handleClick(post.slug)
                        }}
                        key={post}
                        full="true"
                    >
                        {post.title}
                    </Button>
                )
            })
        }
    }

    render() {
        return <div>{this.renderPostLinks()}</div>
    }
}
