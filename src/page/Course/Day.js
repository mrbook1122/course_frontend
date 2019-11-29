import React from 'react'
import styled from "styled-components";

import CourseItem from "./CourseItem";

const Container = styled.div`
    flex-grow: 1;
    height: 100%;
    font-size: 0.7rem;
    text-align: center;
`

const CourseContainer = styled.div`
    height: calc(100% - 30px);
    position: relative;
`

const Day = props => {
    return (
        <Container>
            <div style={{height: '30px'}}>
                <div style={{height: '15px'}}>
                    {props.day.weekNum}
                </div>
                <div style={{height: '15px'}}>
                    {props.day.date}
                </div>
            </div>
            <CourseContainer>
                {props.day.courses.map(course => <CourseItem course={course} key={course.begin}/>)}
            </CourseContainer>
        </Container>
    )
}

export default Day