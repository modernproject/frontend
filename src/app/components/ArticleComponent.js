import React from 'react'
import { connect } from 'react-redux'
import Article from '../styled_components/Article'
import Flex from '../styled_components/Flex'
import Button from '../styled_components/Button'
import BackButtonContainer from '../containers/BackButtonContainer'
import { markdown } from 'markdown'

class ArticleComponent extends React.Component {
    renderMarkdown = () => {
        const formatted = markdown.toHTML(this.props.post.content)
        return { __html: `${formatted}` }
    }
    render() {
        const { post } = this.props
        return (
            Object.keys(post).length !== 0 &&
            this.props.loading === false && (
                <Article>
                    <Flex>
                        <BackButtonContainer />
                        <h1>{this.props.post.title}</h1>
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
