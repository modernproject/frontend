import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
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
        props.confirm &&
        `
            background: blue;
            color: white;
            width: 100%;
        `};

    ${props =>
        props.icon &&
        `
            svg {
                padding-right: 1rem;    
            }
        `};

    ${props =>
        props.full &&
        `
            display: block;
            width: 100%;
            text-align: left;
            border-radius: 0;
            padding-left: 1rem;
            font-size: 1rem;
            font-weight: 400;
            &:hover {
                background-color: ${props.theme.DropDown.hoverColor}
            }
        `};
`
export default Button
