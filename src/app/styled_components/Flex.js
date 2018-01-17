import React from 'react'
import styled from 'styled-components'

const Flex = styled.div`
    display: flex;
    align-items: center;
    align-contents: center;
    flex-flow: initial;

    @media (max-width: ${props => props.theme.mediaQueries.phone}) {
        flex-flow: wrap;

        ${props =>
            props.wrap &&
            `
                flex-flow: wrap-reverse;
                * {
                    padding-left: 0;
                    padding-right: 0;
                }
            `};
    }

    ${props =>
        props.justify &&
        `
        justify-content: ${props.justify}
    `};

    ${props =>
        props.justify &&
        `
        * {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
        }
    `};

    ${props =>
        props.direction &&
        `
        flex-direction: ${props.direction}
    `};
`
export default Flex
