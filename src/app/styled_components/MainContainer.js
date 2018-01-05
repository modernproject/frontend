import React from 'react'
import styled from 'styled-components'

const MainContainer = styled.div`
    background-color: ${props => props.theme.colors.grey50};
    grid-row: 2 / span 2;
    grid-column: 1 / span 2;
`
export default MainContainer
