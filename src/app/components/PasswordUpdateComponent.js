import React from 'react'
import { passwordUpdateAction, passwordResetAction } from '../actions'
import BackButtonContainer from '../containers/BackButtonContainer'
import FormContainer from '../containers/FormContainer'

export default class PasswordUpdateComponent extends React.Component {
    passwordUpdateformBuilder = {
        uri: 'password/change/',
        method: 'POST',
        action: passwordUpdateAction,
        button: { text: 'Update' },
        description: '',
        displayNames: {'new_password1': 'Password', 'new_password2': 'Confirm Password'}
    }

    passwordResetformBuilder = {
        uri: 'password/reset/',
        method: 'POST',
        action: passwordResetAction,
        button: { text: 'Reset Password' },
        name: '',
        description: '',
        values: {
            email: this.props.email
        },
        noDisplayFields: ['email'],
    }

    render() {
        return (
            <div>
                <FormContainer formBuilder={this.passwordUpdateformBuilder} />
                <FormContainer formBuilder={this.passwordResetformBuilder} />
            </div>
        )
    }
}
