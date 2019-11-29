import React from 'react'
import styled from "styled-components";

const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

const Input = styled.input`
   width: 100%;
   outline: none;
   padding: 10px;
   border-radius: 5px;
   border: 1px solid #cccccc;
   ::placeholder {
      color: #aaaaaa;
   }
`

const Button = styled.button`
    margin-top: 10px;
    width: 100%;
    padding: 8px;
    border-radius: 5px;
    border: 1px solid #00a7de;
    background: #00a7de;
    outline: none;
    cursor: pointer;
    color: white;
`

const styles = {
    main: {
        maxWidth: '350px',
        width: '100%',
        padding: '20px'
    }
}

const Login = props => {
    return (
        <Container>
            <div style={styles.main}>
                <Input placeholder={'教务处账号'}/>
                <Button>确定</Button>
            </div>
        </Container>
    )
}

export default Login