import React from 'react'
import { connect } from 'react-redux'
import { emailConfirmationAction } from '../actions'
import EmailConfirmationComponent from '../components/EmailConfirmationComponent'

class EmailConfirmationContainer extends React.Component {
    state = {
        confirmed: false
    }

    componentDidMount() {
        const { dispatch, key } = this.props
        if (key) {
            dispatch(emailConfirmationAction(this.props.key)).then(() => {
                this.setState({ confirmed: true })
            })
        }
    }

    render() {
        return <EmailConfirmationComponent {...this.state} />
    }
}

function mapStateToProps(state, ownProps) {
    const key = ownProps.match.params.key
    return { key }
}

export default connect(mapStateToProps)(EmailConfirmationContainer)
