import React from 'react'
import styled from "styled-components";

const Container = styled.div`
    position: absolute;
    top: ${props => props.top};
    width: 100%;
    padding: 1px;
    height: ${props => props.height};
    font-size: 0.7rem;
`

const CourseContainer = styled.div`
    width: 100%;
    height: 100%;
    border: 1px solid black;
    border-radius: 3px;
    padding: 1px 0;
    text-align: center;
    word-wrap: break-word;
    word-break: break-all;
`

const CourseItem = props => {
    let top = props.course.begin;
    if (top > 7)
        top += 1;
    else if (top > 3)
        top += 0.5;
    return (
        <Container top={top * 8.333 + '%'} height={props.course.num * 8.333 + '%'}>
            <CourseContainer>
                {props.course.name}
                <div style={{marginTop: '10px'}}>
                    {props.course.address}
                </div>
            </CourseContainer>
        </Container>
    )
}

export default CourseItem