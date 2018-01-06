import React from 'react'
import PropTypes from 'prop-types'
import Button from '../styled_components/Button'

export default class DashboardComponent extends React.Component {
    static props = {
        posts: PropTypes.object.isRequired,
        categories: PropTypes.object.isRequired,
        handleClick: PropTypes.func.isRequired
    }

    renderCategorySections = () => {
        const { categories } = this.props
        if (categories.length > 0) {
            return categories.map(category => {
                return (
                    <div>
                        <h2 key={category.value}>{category.display_name}</h2>
                        {this.renderPostLinks(category.value)}
                    </div>
                )
            })
        }
    }

    renderPostLinks = value => {
        const { posts } = this.props
        if (posts.length > 0) {
            return posts.map(post => {
                if (post.category === value) {
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
                }
            })
        }
    }

    render() {
        return this.renderCategorySections()
    }
}
