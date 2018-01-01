import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.div`
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row: 3;

    background-color: ${props => props.theme.Footer.backgroundColor};
    color: ${props => props.theme.Footer.color};
`
export default FooterContainer
