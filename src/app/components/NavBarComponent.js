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
        const { user, displayDropDown, handleOnClick } = this.props
        return (
            <NavBar>
                <LogoButton />
                {Object.keys(user).length > 0 ? (
                    <Button id="userIcon" icon="true" onClick={handleOnClick}>
                        <FontAwesomeIcon icon="user-circle" />
                        <FontAwesomeIcon icon={displayDropDown ? "chevron-up" : "chevron-down"} />
                    </Button>
                ) : (
                    <div>
                        <ButtonComponent
                            outline="true"
                            color="green"
                            text={'Sign Up'}
                            url={'/signup'}
                        />
                        <ButtonComponent
                            color="green"
                            text={'Login'}
                            url={'/login'}
                        />
                    </div>
                )}
            </NavBar>
        )
    }
}

export default NavBarComponent
