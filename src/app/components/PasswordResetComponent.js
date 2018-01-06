import React from 'react'
import { passwordResetConfirmAction } from '../actions'
import BackButtonContainer from '../containers/BackButtonContainer'
import FormContainer from '../containers/FormContainer'

export default class PasswordResetComponent extends React.Component {
    formBuilder = {
        uri: 'password/reset/confirm',
        method: 'POST',
        action: passwordResetConfirmAction,
        button: { text: 'Update' },
        description: '',
        values: {
            uid: this.props.uid,
            token: this.props.token
        },
        noDisplayFields: ['uid', 'token']
    }

    render() {
        return <FormContainer formBuilder={this.formBuilder} />
    }
}
