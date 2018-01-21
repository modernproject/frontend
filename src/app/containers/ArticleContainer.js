import React from 'react'
import { connect } from 'react-redux'
import { postClear, postListRequest, postRequest } from '../actions'
import ArticleComponent from '../components/ArticleComponent'

class ArticleContainer extends React.Component {
    state = {
        loading: false
    }

    componentDidMount() {
        this.props.dispatch(postClear()).then(() => {
            this.props.dispatch(postRequest(this.props.postUrl)).then(() => {
                this.setState({ loading: true })
            })
        })
    }

    render() {
        return <ArticleComponent {...this.props} {...this.state} />
    }
}

function mapStateToProps(state, ownProps) {
    const articleSlug = ownProps.match.params.articleSlug
    const postUrl = state.postList.filter(post => {
        return post.slug == articleSlug && post
    })[0].url
    return { postUrl }
}

export default connect(mapStateToProps)(ArticleContainer)
