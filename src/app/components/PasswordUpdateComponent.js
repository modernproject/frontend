import React from 'react'
import { passwordUpdateAction, passwordResetAction } from '../actions'
import BackButtonContainer from '../containers/BackButtonContainer'
import FormContainer from '../containers/FormContainer'

export default class PasswordUpdateComponent extends React.Component {
    passwordUpdateformBuilder = {
        uri: 'password/change/',
        method: 'POST',
        action: passwordUpdateAction,
        button: { text: 'CONFIRM' },
        description: ''
    }

    passwordResetformBuilder = {
        uri: 'password/reset/',
        method: 'POST',
        action: passwordResetAction,
        button: { text: 'RESET PASSWORD' },
        name: '',
        description: '',
        values: {
            email: this.props.email
        },
        noDisplayFields: ['email']
    }

    render() {
        return (
            <div>
                <BackButtonContainer />
                <FormContainer formBuilder={this.passwordUpdateformBuilder} />
                <FormContainer formBuilder={this.passwordResetformBuilder} />
            </div>
        )
    }
}
