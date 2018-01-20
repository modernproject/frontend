import React from 'react'
import Button from '../styled_components/Button'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

export default class BackButtonComponent extends React.Component {
    render() {
        return (
            <Button
                onClick={() => {
                    this.props.handleClick()
                }}
                back="true"
                type="button"
            >
                <FontAwesomeIcon icon="chevron-left" />
            </Button>
        )
    }
}
