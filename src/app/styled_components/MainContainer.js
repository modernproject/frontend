import React from 'react'
import styled from 'styled-components'

const MainContainer = styled.div`
    background-color: ${props => props.theme.colors.white};
    grid-row: 2 / span 2;
    grid-column: 1 / span 2;

    @media (max-width: ${props => props.theme.mediaQueries.phone}) {
        padding-left: 2rem;
        padding-right: 2rem;
    }

    @media (min-width: ${props => props.theme.mediaQueries.tabletPortrait}) {
        padding-left: 6rem;
        padding-right: 6rem;
        padding-top: 2rem;
    }

    @media (min-width: ${props => props.theme.mediaQueries.tabletLandscape}) {
        padding-left: 12rem;
        padding-right: 12rem;
    }

    @media (min-width: ${props => props.theme.mediaQueries.desktop}) {
        padding-left: 16rem;
        padding-right: 16rem;
    }

    @media (min-width: ${props => props.theme.mediaQueries.desktopLarge}) {
        padding-left: 24rem;
        padding-right: 24rem;
    }
`
export default MainContainer
