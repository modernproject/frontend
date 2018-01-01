import React from 'react'
import styled from 'styled-components'

const Label = styled.label`
    display: block;
    padding-top: 0.5rem;
    padding-left: 0.5rem;
    font-size: 1rem;
    color: ${props => props.theme.colors.grey800};
    width: 100%;
`
export default Label
