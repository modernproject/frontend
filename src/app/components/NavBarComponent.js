import React from 'react'
import PropTypes from 'prop-types'
import NavBar from '../styled_components/Navbar'
import LoginButton from './LoginButton'
import RegistrationButton from './RegistrationButton'
import LogoButton from './LogoButton'
import Button from '../styled_components/Button'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

export default class NavBarComponent extends React.Component {
    static propTypes = {
        user: PropTypes.object.isRequired,
        displayDropDown: PropTypes.bool.isRequired
    }

    render() {
        const { user, displayDropDown } = this.props
        return (
            <NavBar>
                <LogoButton />
                {Object.keys(user).length > 0 ? (
                    displayDropDown ? (
                        <Button onClick={this.props.handleOnClick}>
                            <FontAwesomeIcon icon="chevron-up" />
                        </Button>
                    ) : (
                        <Button onClick={this.props.handleOnClick}>
                            <FontAwesomeIcon icon="chevron-down" />
                        </Button>
                    )
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
