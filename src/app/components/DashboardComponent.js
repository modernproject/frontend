import React from 'react'
import PropTypes from 'prop-types'
import ButtonComponent from './ButtonComponent'
import Button from '../styled_components/Button'
import Flex from '../styled_components/Flex'
import Link from '../styled_components/Link'

import ContentSection from '../styled_components/ContentSection'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

export default class DashboardComponent extends React.Component {
    static props = {
        posts: PropTypes.object.isRequired,
        categories: PropTypes.object.isRequired,
        handleClick: PropTypes.func.isRequired
    }

    renderCategorySelectors = () => {
        const { categories } = this.props
        if (categories.length > 0) {
            return (
                <Flex justify="space-between">
                    <Link>All</Link>
                    {categories.map(category => {
                        return (
                            <Link key={category.value}>
                                {category.display_name}
                            </Link>
                        )
                    })}
                </Flex>
            )
        }
    }

    renderCategorySections = () => {
        const { categories } = this.props
        if (categories.length > 0) {
            return categories.map(category => {
                return this.renderPostLinks(category.value)
            })
        } else {
            return (
                <a href="http://medium.com/@djstein/">
                    Posts coming soon. Please follow on Medium for updates.
                </a>
            )
        }
    }

    renderPostLinks = value => {
        const { postList } = this.props
        if (postList.length > 0) {
            return postList.map(post => {
                if (post.category === value) {
                    return (
                        <Link
                            onClick={() => {
                                this.props.handleClick(post.slug)
                            }}
                            key={post.slug}
                        >
                            {post.title}
                        </Link>
                    )
                }
            })
        }
    }

    render() {
        return (
            <React.Fragment>
                {this.renderCategorySelectors()}
                <ContentSection>{this.renderCategorySections()}</ContentSection>
                <ContentSection>
                    <Flex justify="center">
                        <div>
                            <a href="https://github.com/djstein">
                                <FontAwesomeIcon icon={['fab', 'github']} />
                            </a>
                            <a href="https://twitter.com/d_j_stein">
                                <FontAwesomeIcon icon={['fab', 'twitter']} />
                            </a>
                        </div>
                    </Flex>
                </ContentSection>
            </React.Fragment>
        )
    }
}
