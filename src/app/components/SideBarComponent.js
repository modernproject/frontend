import React from 'react'
import SideBarContainer from '../styled_components/SideBarContainer'
import PropTypes from 'prop-types'

export default class SideBarComponent extends React.Component {
    static propTypes = {
        displaySideBar: PropTypes.bool.isRequired
    }

    render() {
        if (this.props.displaySideBar) {
            return (
                <SideBarContainer collapsed={this.props.displaySideBar}>
                    <p>HOME</p>
                </SideBarContainer>
            )
        } else {
            return null
        }
    }
}
