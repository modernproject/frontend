import React from 'react'
import Button from '../styled_components/Button'
import Container from '../styled_components/Container'

export default class SettingsComponent extends React.Component {
    render() {
        return (
            <Container>
                <h2>Settings</h2>
                <Button
                    full
                    onClick={() => {
                        this.props.handleClickRoute('user')
                    }}
                >
                    User Settings
                </Button>
                <Button full>Email Preferences</Button>
                <Button full>Payment Info</Button>
                <Button
                    full
                    onClick={() => {
                        this.props.handleClickRoute('password')
                    }}
                >
                    Password Settings
                </Button>
            </Container>
        )
    }
}
