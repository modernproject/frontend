import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    border: none;

    @media (max-width: 32rem) {
        padding-top: 5%;
    }

    @media (min-width: 32rem) {
        margin-left: 15%;
        margin-right: 15%;
        margin-top: 5%;
        margin-bottom: 5%;
        padding: 5%;
    }
`
export default Container
