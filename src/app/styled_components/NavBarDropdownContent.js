import React from 'react'
import styled from 'styled-components'

const NavBarDropdownContent = styled.div`
    background-color: ${props => props.theme.DropDown.backgroundColor};
    box-shadow: 0 1rem 2rem 0 rgba(0, 0, 0, 0.2);
    grid-row: 2;
    grid-column: 2;
    z-index: 1;

    a {
        display: block;
        text-align: left;
        color: black;
        text-decoration: none;
        padding-bottom: 0.5rem;
        padding-top: 0.5rem;
        padding-left: 1rem;
        padding-right: 1rem;
    }
    a:hover {
        background-color: ${props => props.theme.DropDown.hoverColor};
    }
`
export default NavBarDropdownContent
