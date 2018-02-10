import React from 'react'
import { connect } from 'react-redux'
import { postClear, postListRequest, postRequest } from '../actions'
import ArticleComponent from '../components/ArticleComponent'

class ArticleContainer extends React.Component {
    state = {
        loading: true
    }

    componentDidMount() {
        this.props.dispatch(postClear())
        this.props.dispatch(postRequest(this.props.postUrl))
        this.setState({ loading: false })
    }

    render() {
        return <ArticleComponent {...this.props} {...this.state} />
    }
}

function mapStateToProps(state, ownProps) {
    const articleSlug = ownProps.match.params.articleSlug
    let postUrl = ''
    if (state.postList.length > 0) {
        postUrl = state.postList.filter(post => {
            return post.slug == articleSlug && post
        })[0].url
    }
    return { postUrl }
}

export default connect(mapStateToProps)(ArticleContainer)
