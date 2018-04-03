import React from 'react'
import { connect } from 'react-redux'
import Article from '../styled_components/Article'
import Flex from '../styled_components/Flex'
import Button from '../styled_components/Button'
import { markdown } from 'markdown'

class ArticleComponent extends React.Component {
    renderMarkdown = () => {
        const formatted = markdown.toHTML(this.props.post.content)
        return { __html: `${formatted}` }
    }
    render() {
        const { post } = this.props
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }
        const date = new Date(post.updated).toLocaleDateString('en-US', options)
        return (
            Object.keys(post).length !== 0 &&
            this.props.loading === false && (
                <Article>
                    <Flex direction="column" align="flex-start">
                        <p>{post.category}</p>
                        <h1>{post.title}</h1>
                        <p>Dylan Stein - {date}</p>
                    </Flex>
                    <div dangerouslySetInnerHTML={this.renderMarkdown()} />
                </Article>
            )
        )
    }
}

function mapStateToProps(state, ownProps) {
    const post = state.post
    return { post }
}

export default connect(mapStateToProps)(ArticleComponent)
