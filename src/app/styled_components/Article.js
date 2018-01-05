import React from 'react'
import styled from 'styled-components'

const Article = styled.div`
    div:first-child {
        margin-left: -4rem;
    }

    @media (max-width: ${props => props.theme.mediaQueries.phone}) {
        div:first-child {
            margin-left: 0rem;
        }
    }
`
export default Article
