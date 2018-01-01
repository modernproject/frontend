import React from 'react'
import ToggleButton from '../styled_components/ToggleButton'

export default class ToggleButtonComponent extends React.Component {
    render() {
        return (
            <ToggleButton
                onClick={() => {
                    this.props.handleClick()
                }}
            >
                |||
            </ToggleButton>
        )
    }
}
