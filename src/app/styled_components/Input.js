import React from 'react'
import styled from 'styled-components'

const Input = styled.input.attrs({
    color: props => (props.error === true ? 'red' : '')
})`
    font-size: 1rem;
    display: block;
    padding: 0.5rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    background: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.black};
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom-color: ${props => props.color};
    width: 100%;

    ::placeholder {
        color: ${props => props.color};
        font-size: 1rem;
    }
`
export default Input
