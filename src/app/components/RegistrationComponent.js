import React from 'react'
import FormContainer from '../containers/FormContainer'
import { registrationAction } from '../actions'

class RegistrationComponent extends React.Component {
    formBuilder = {
        uri: 'registration',
        method: 'POST',
        action: registrationAction,
        button: { text: 'Sign Up' },
        name: 'Sign Up',
        noDisplayFields: ['username']
    }

    render() {
        return <FormContainer formBuilder={this.formBuilder} />
    }
}

export default RegistrationComponent
