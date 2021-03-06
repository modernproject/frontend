import React from 'react'
import { userUpdateAction } from '../actions'
import FormContainer from '../containers/FormContainer'
import BackButtonContainer from '../containers/BackButtonContainer'

class UserFormComponent extends React.Component {
    formBuilder = {
        uri: 'user',
        method: 'PUT',
        action: userUpdateAction,
        button: { text: 'Update' },
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
