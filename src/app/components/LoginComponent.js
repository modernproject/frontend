import React from 'react'
import FormContainer from '../containers/FormContainer'
import { loginAction } from '../actions'

class LoginComponent extends React.Component {
    formBuilder = {
        uri: 'login',
        method: 'POST',
        action: loginAction,
        button: { text: 'LOGIN' },
        description: '',
        noDisplayFields: ['username']
    }

    render() {
        return <FormContainer formBuilder={this.formBuilder} />
    }
}

export default LoginComponent
