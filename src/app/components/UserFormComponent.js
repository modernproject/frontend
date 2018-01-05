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
        noDisplayFields: ['pk', 'email', 'username'],
        values: {
            first_name: this.props.user.first_name,
            last_name: this.props.user.last_name
        }
    }

    render() {
        return <FormContainer formBuilder={this.formBuilder} />
    }
}

export default UserFormComponent
