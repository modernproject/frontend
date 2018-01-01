import React from 'react'
import PropTypes from 'prop-types'
import NavBar from '../styled_components/Navbar'
import LoginButton from './LoginButton'
import RegistrationButton from './RegistrationButton'
import LogoButton from './LogoButton'
import Button from '../styled_components/Button'
import NavBarDropdownContainer from '../containers/NavBarDropdownContainer'
import ToggleButtonContainer from '../containers/ToggleButtonContainer'

export default class NavBarComponent extends React.Component {
    static propTypes = {
        user: PropTypes.object.isRequired
    }

    render() {
        const { user } = this.props
        return (
            <NavBar>
                <div>
                    <ToggleButtonContainer />
                    <LogoButton />
                </div>
                {Object.keys(user).length > 0 ? (
                    <NavBarDropdownContainer user={user} />
                ) : (
                    <div>
                        <RegistrationButton key={'registration'} />,
                        <LoginButton key={'login'} />
                    </div>
                )}
            </NavBar>
        )
    }
}
