import React from 'react'
import Article from '../styled_components/Article'
import Flex from '../styled_components/Flex'
import Button from '../styled_components/Button'
import BackButtonContainer from '../containers/BackButtonContainer'
import { markdown } from 'markdown'

export default class ArticleComponent extends React.Component {
    renderMarkdown = () => {
        const formatted = markdown.toHTML(this.props.post.content)
        return { __html: `${formatted}` }
    }
    render() {
        return (
            <Article>
                <Flex>
                    <BackButtonContainer />
                    <h1>{this.props.post.title}</h1>
                </Flex>
                <div dangerouslySetInnerHTML={this.renderMarkdown()} />
            </Article>
        )
    }
}
