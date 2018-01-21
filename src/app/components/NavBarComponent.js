import React from 'react'
import PropTypes from 'prop-types'
import NavBar from '../styled_components/Navbar'
import ButtonComponent from './ButtonComponent'
import LogoButton from './LogoButton'
import Button from '../styled_components/Button'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

class NavBarComponent extends React.Component {
    static propTypes = {
        user: PropTypes.object.isRequired,
        displayDropDown: PropTypes.bool.isRequired
    }

    render() {
        const { user, displayDropDown } = this.props
        return (
            <NavBar>
                <ButtonComponent text={'Subscribe'} url={'/subscribe'} />
                <LogoButton />
                {Object.keys(user).length > 0 ? (
                    displayDropDown ? (
                        <Button icon="true" onClick={this.props.handleOnClick}>
                            <FontAwesomeIcon icon="user-circle" />
                            <FontAwesomeIcon icon="chevron-up" />
                        </Button>
                    ) : (
                        <Button icon="true" onClick={this.props.handleOnClick}>
                            <FontAwesomeIcon icon="user-circle" />
                            <FontAwesomeIcon icon="chevron-down" />
                        </Button>
                    )
                ) : (
                    <div>
                        <ButtonComponent text={'Sign Up'} url={'/signup'} />
                        <ButtonComponent text={'Login'} url={'/login'} />
                    </div>
                )}
            </NavBar>
        )
    }
}

export default NavBarComponent
