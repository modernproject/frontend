import React from 'react'
import { connect } from 'react-redux'
import SettingsComponent from '../components/SettingsComponent'
import { push } from 'react-router-redux'

class SettingsContainer extends React.Component {
    handleClickRoute = uri => {
        this.props.dispatch(push(uri))
    }

    render() {
        return <SettingsComponent handleClickRoute={this.handleClickRoute} />
    }
}

function mapStateToProps(state, ownProps) {
    return {}
}

export default connect(mapStateToProps)(SettingsContainer)
