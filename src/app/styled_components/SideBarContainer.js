import React from 'react'
import styled from 'styled-components'

const SideBarWrapper = styled.div`
    grid-column: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    align-content: center;
    color: ${props => props.theme.SideBar.color};
    background-color: ${props => props.theme.SideBar.backgroundColor};
    padding-left: 2rem;
`
export default SideBarWrapper
