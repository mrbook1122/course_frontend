import React from 'react'
import styled from "styled-components";

/**
 * height: 38px
 */
const Container = styled.div`
    padding: 5px 10px;
    text-align: center;
    height: 38px;
    line-height: 28px;
`

const Top = props => {
    return (
        <Container>
            {props.time}
        </Container>
    )
}

export default Top