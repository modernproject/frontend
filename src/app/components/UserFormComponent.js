import React from 'react'
import FormContainer from '../containers/FormContainer'
import { userUpdateAction } from '../actions'

class UserFormComponent extends React.Component {
    formBuilder = {
        uri: 'user',
        method: 'PUT',
        action: userUpdateAction,
        button: { text: 'UPDATE' },
        description: '',
        noDisplayFields: ['pk', 'email', 'username']
    }

    render() {
        return <FormContainer formBuilder={this.formBuilder} />
    }
}

export default UserFormComponent

