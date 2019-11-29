import React from 'react'
import styled from "styled-components";

import Day from "./Day";

const Container = styled.div`
    width: 100%;
    height: calc(100% - 38px);
    display: flex;
    font-size: 0.7rem;
    text-align: center;
`

const Sider = styled.div`
    flex-basis: 15px;
`
const CourseContainer = styled.div`
    height: calc(100% - 30px);
`
const Week = props => {
    return (
        <Container>
            <Sider>
                <div style={{height: '30px'}}>
                    <div style={{height: '15px'}}>
                        {props.month}
                    </div>
                    <div style={{height: '15px'}}>
                        月
                    </div>
                </div>
                <CourseContainer>
                    {}
                </CourseContainer>
            </Sider>
            {props.days.map(day => <Day day={day} key={day.date}/>)}
        </Container>
    )
}

export default Week