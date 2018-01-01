import React from 'react'
import styled from 'styled-components'

const GridContainer = styled.div`
    display: grid;
    height: 100%;
    width: 100%;
    grid-template-columns: 16rem auto;
    grid-template-rows: 3rem auto;

    @media (max-width: 32rem) {
        grid-template-columns: auto;
    }
`
export default GridContainer
