import React from 'react'
import BackButtonContainer from '../containers/BackButtonContainer'

export default class EmailConfirmationComponent extends React.Component {
    render() {
        return this.props.confirmed ? <h1>Success</h1> : <h1>Waiting...</h1>
    }
}
