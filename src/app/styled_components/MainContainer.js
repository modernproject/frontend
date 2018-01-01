import React from 'react'
import styled from 'styled-components'

const MainContainer = styled.div`
    grid-column-start: ${props => (props.displaySideBar ? 2 : 1)};
    grid-column-end: 3;
    grid-row: 2;
    background-color: #fafafa;
`
export default MainContainer
