import React from 'react'
import PropTypes from 'prop-types'
import Button from '../styled_components/Button'
import Flex from '../styled_components/Flex'
import RegistrationButton from './RegistrationButton'
import ContentSection from '../styled_components/ContentSection'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

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
                    <div key={category.value}>
                        <h2>{category.display_name}</h2>
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
        return (
            <div>
                <ContentSection>
                    <Flex wrap="true" justify="center">
                        <Flex wrap="true" direction="column">
                            <p>
                                Sign up to recieve updates on new tutorials and
                                exclusive content
                            </p>
                            <RegistrationButton color="green" />
                        </Flex>

                        <h2>
                            Learn How to Deploy a Truly Modern Application with
                            Modern Project
                        </h2>
                    </Flex>
                </ContentSection>
                <ContentSection>
                    <h1>Articles</h1>
                    {this.renderCategorySections()}
                </ContentSection>
                <ContentSection>
                    <h1>About ModernProject</h1>
                    <Flex justify="center">
                        <p>This project is brought to you by Dylan Stein</p>
                        <div>
                            <FontAwesomeIcon icon={['fab', 'github']} />

                            <FontAwesomeIcon icon={['fab', 'twitter']} />
                        </div>
                    </Flex>
                </ContentSection>
            </div>
        )
    }
}
