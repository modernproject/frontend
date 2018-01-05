import React from 'react'
import styled from 'styled-components'

const GridContainer = styled.div`
    display: grid;
    height: 100%;
    width: 100%;
    grid-template-columns: auto 15rem;
    grid-template-rows: 3rem 5rem auto;

    @media (max-width: 32rem) {
        grid-template-columns: auto;
    }
`
export default GridContainer
