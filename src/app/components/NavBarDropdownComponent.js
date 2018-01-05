import React from 'react'
import Button from '../styled_components/Button'
import NavBarDropdownContent from '../styled_components/NavBarDropdownContent'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import onClickOutside from 'react-onclickoutside'

class NavBarDropdownComponent extends React.Component {
    handleClickOutside = event => {
        this.props.handleClickOutside(event)
    }

    render() {
        return (
            this.props.displayDropDown && (
                <NavBarDropdownContent>
                    <Button
                        full="true"
                        onClick={() => {
                            this.props.handleClickRoute('/settings/')
                        }}
                        icon="true"
                    >
                        <FontAwesomeIcon icon="cog" />
                        Settings
                    </Button>
                    <Button
                        full="true"
                        onClick={this.props.handleOnClickSignOut}
                        icon="true"
                    >
                        <FontAwesomeIcon icon="sign-out-alt" />
                        Sign Out
                    </Button>
                </NavBarDropdownContent>
            )
        )
    }
}

export default onClickOutside(NavBarDropdownComponent)
