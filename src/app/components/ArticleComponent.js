import React from 'react'
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
            <div>
                <BackButtonContainer />
                <div dangerouslySetInnerHTML={this.renderMarkdown()} />
            </div>
        )
    }
}
