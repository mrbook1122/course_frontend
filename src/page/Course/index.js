import React, {useState, useEffect} from 'react'
import styled from "styled-components";
import Swiper from "swiper";
import 'swiper/css/swiper.min.css'
import axios from 'axios'

import Top from "./Top";
import Week from "./Week";

const Container = styled.div`
    height: 100vh;
    width: 100%;
    position: relative;
`

const MenuButtonContainer = styled.div`
    position: absolute;
    left: 10px;
    top: 5px;
`

/**
 * height: 28px
 */
const MenuButton = props => {
    return (
        <MenuButtonContainer>
            <svg viewBox="0 0 1310 1024" width="20" height="20" style={{marginTop: '4px'}}>
                <path
                    d="M1187.84 286.72H122.88a122.88 122.88 0 0 1-122.88-122.88V122.88a122.88 122.88 0 0 1 122.88-122.88h1064.96a122.88 122.88 0 0 1 122.88 122.88v40.96a122.88 122.88 0 0 1-122.88 122.88z m40.96-163.84a40.96 40.96 0 0 0-40.96-40.96H122.88a40.96 40.96 0 0 0-40.96 40.96v40.96a40.96 40.96 0 0 0 40.96 40.96h1064.96a40.96 40.96 0 0 0 40.96-40.96V122.88zM122.88 368.64h614.4a122.88 122.88 0 0 1 122.88 122.88v40.96a122.88 122.88 0 0 1-122.88 122.88H122.88a122.88 122.88 0 0 1-122.88-122.88v-40.96a122.88 122.88 0 0 1 122.88-122.88z m-40.96 163.84a40.96 40.96 0 0 0 40.96 40.96h614.4a40.96 40.96 0 0 0 40.96-40.96v-40.96a40.96 40.96 0 0 0-40.96-40.96H122.88a40.96 40.96 0 0 0-40.96 40.96v40.96z m40.96 204.8h860.16a122.88 122.88 0 0 1 122.88 122.88v40.96a122.88 122.88 0 0 1-122.88 122.88H122.88a122.88 122.88 0 0 1-122.88-122.88v-40.96a122.88 122.88 0 0 1 122.88-122.88z m-40.96 163.84a40.96 40.96 0 0 0 40.96 40.96h860.16a40.96 40.96 0 0 0 40.96-40.96v-40.96a40.96 40.96 0 0 0-40.96-40.96H122.88a40.96 40.96 0 0 0-40.96 40.96v40.96z"/>
            </svg>
        </MenuButtonContainer>
    )
}

const Course = props => {
    const [weeks, setWeeks] = useState([])
    useEffect(() => {
        if (weeks.length === 0) {
            axios.get('http://47.100.136.150:8080/')
                .then(resp => {
                    setWeeks(resp.data)
                })
        }
    })
    useEffect(() => {
        new Swiper ('.swiper-container', {
            loop: false
        })
    })
    return (
        <Container>
            <MenuButton/>
            <div className={'swiper-container'}>
                <div className="swiper-wrapper">
                    {weeks.map(week => (
                        <div className="swiper-slide" key={week.time}>
                            <Top time={week.time}/>
                            <Week days={week.days} month={week.month}/>
                        </div>
                    ))}
                </div>

            </div>
        </Container>
    )
}

export default Course