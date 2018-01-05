import React from 'react'
import Button from '../styled_components/Button'
import NavBarDropdownContent from '../styled_components/NavBarDropdownContent'

class NavBarDropdownComponent extends React.Component {
    render() {
        return (
            this.props.displayDropDown && (
                <NavBarDropdownContent>
                    <Button
                        full="true"
                        onClick={() => {
                            this.props.handleClickRoute('/settings/')
                        }}
                    >
                        SETTINGS
                    </Button>
                    <Button
                        full="true"
                        onClick={this.props.handleOnClickSignOut}
                    >
                        SIGN OUT
                    </Button>
                </NavBarDropdownContent>
            )
        )
    }
}

export default NavBarDropdownComponent
