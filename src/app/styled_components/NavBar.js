import React from 'react'
import styled from 'styled-components'

const NavBar = styled.div`
    align-content: center;
    align-items: center;
    background-color: ${props => props.theme.NavBar.backgroundColor};
    color: ${props => props.theme.NavBar.color};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    grid-column: 1 / span 2;
`
export default NavBar
