import React from 'react'
import styled from 'styled-components'

const FieldSet = styled.fieldset`
    align-items: center;
    display: flex;
    flex-direction: column;
    border: none;
    padding: 0;
    margin: 0;

    div > button:first-child {
        margin-top: 0rem;
    }

    button {
        margin-top: 1rem;
    }

    @media (max-width: 32rem) {
    }

    @media (min-width: 32rem) {
    }
`
export default FieldSet

// div:first-child {
//     margin-left: -4rem;
// }

// @media (max-width: ${props => props.theme.mediaQueries.phone}) {
//     div:first-child {
//         margin-left: 0rem;
//     }
// }
