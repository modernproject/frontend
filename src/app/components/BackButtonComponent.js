import React from 'react'
import Button from '../styled_components/Button'

export default class BackButtonComponent extends React.Component {
    render() {
        return (
            <Button
                onClick={() => {
                    this.props.handleClick()
                }}
            >
                BACK
            </Button>
        )
    }
}
