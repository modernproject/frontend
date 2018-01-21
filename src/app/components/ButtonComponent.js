import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import Button from '../styled_components/Button'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

class ButtonComponent extends React.Component {
    handleClick = () => {
        const { dispatch, url } = this.props
        dispatch(push(url))
    }
    render() {
        return (
            <Button onClick={this.handleClick} {...this.props}>
                {this.props.icon && (
                    <FontAwesomeIcon icon={this.props.iconName} />
                )}
                {this.props.text}
            </Button>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {}
}

export default connect(mapStateToProps)(ButtonComponent)
