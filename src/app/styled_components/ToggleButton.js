import React from 'react'
import styled from 'styled-components'

const ToggleButton = styled.button`
    border-width: 0.1rem;
    border-radius: 0.25rem;
    font-size: 0.875rem;
    font-weight: 500;
    border-style: solid;
    padding: 0.5rem;
    background: transparent;
    border-color: transparent;
    &:active {
        background-color: gray;
    }

    ${props =>
        props.form &&
        `
            background: blue;
            color: white;
        `};
`
export default ToggleButton
