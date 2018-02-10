import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    border-width: 0.1rem;
    border-radius: 0.25rem;
    font-size: 1rem;
    font-weight: 500;
    border-style: solid;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    background: transparent;
    border-color: transparent;
    &:active {
        background-color: gray;
    }
    margin-left: 0.25rem;
    margin-right: 0.25rem;

    ${props =>
        props.block &&
        `
            color: ${props.theme.colors.white};
            background-color: ${props.theme.colors[props.color]};
            display: block;
            width: 100%;
            height: 5rem;
            margin: .25rem;
            text-align: left;
            border-radius: 0;
            padding-left: 1rem;
            font-size: 1.5rem;
            font-weight: 400;
            &:hover {
                background-color: ${props.theme.DropDown.hoverColor}
            }
        `};

    ${props =>
        props.color &&
        `
            color: ${props.theme.colors.white};
            background-color: ${props.theme.colors[props.color]};
        `};

    ${props =>
        props.back &&
        `
            margin-left: 0;
            margin-right: 2rem;
            @media (max-width: ${props => props.theme.mediaQueries.phone}) {
                margin-right: 1rem;
            }
        `};

    ${props =>
        props.confirm &&
        `
            background: ${props.theme.colors.blue};
            color: white;
            width: 100%;
        `};

    ${props =>
        props.icon &&
        `
            svg:first-child {
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

    ${props =>
        props.outline &&
        `
            border-color: ${props.theme.colors[props.color]};
            color:  ${props.theme.colors[props.color]};
            background-color: inherit;
        `};
`
export default Button
