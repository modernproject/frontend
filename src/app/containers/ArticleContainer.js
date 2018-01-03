import React from 'react'
import { connect } from 'react-redux'
import ArticleComponent from '../components/ArticleComponent'

class ArticleContainer extends React.Component {
    render() {
        return <ArticleComponent {...this.props} />
    }
}

function mapStateToProps(state, ownProps) {
    const articleSlug = ownProps.match.params.articleSlug
    const post = state.posts.map(post => {
        return post.slug === articleSlug && post
    })[0]
    return { post }
}

export default connect(mapStateToProps)(ArticleContainer)
