import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Button from '../styled_components/Button'
import NavBarDropdownContent from '../styled_components/NavBarDropdownContent'

class NavBarDropdownComponent extends React.Component {
    static propTypes = {
        user: PropTypes.object.isRequired
    }
    render() {
        const { user } = this.props
        return (
            <div>
                <Button onClick={this.props.handleOnClick}>
                    {user.username}
                </Button>
                {this.props.displayDropDown && (
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
                )}
            </div>
        )
    }
}

export default NavBarDropdownComponent
