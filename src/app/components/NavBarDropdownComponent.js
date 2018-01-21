import React from 'react'
import ButtonComponent from './ButtonComponent'
import NavBarDropdownContent from '../styled_components/NavBarDropdownContent'
import onClickOutside from 'react-onclickoutside'

class NavBarDropdownComponent extends React.Component {
    handleClickOutside = event => {
        this.props.handleClickOutside(event)
    }

    render() {
        return (
            this.props.displayDropDown && (
                <NavBarDropdownContent>
                    <ButtonComponent
                        onClick={() => {
                            this.props.handleClickRoute('/subscribe')
                        }}
                        full="true"
                        icon="true"
                        iconName="unlock-alt"
                        text={'Subscribe'}
                    />
                    <ButtonComponent
                        onClick={() => {
                            this.props.handleClickRoute('/settings/')
                        }}
                        full="true"
                        icon="true"
                        iconName="cog"
                        text={'Settings'}
                    />
                    <ButtonComponent
                        full="true"
                        onClick={() => {
                            this.props.handleClickRoute('/help')
                        }}
                        full="true"
                        icon="true"
                        iconName="question"
                        text={'Help'}
                    />
                    <ButtonComponent
                        full="true"
                        onClick={this.props.handleOnClickSignOut}
                        full="true"
                        icon="true"
                        iconName="sign-out-alt"
                        text={'Sign Out'}
                    />
                </NavBarDropdownContent>
            )
        )
    }
}

export default onClickOutside(NavBarDropdownComponent)
