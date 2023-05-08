import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
width:100%;
/* outline:1px solid red; */
min-height:100vh;
`
const Wrapper = styled.div`
/* outline:1px solid red; */
min-height:200px;
width:40%;
display:flex;
flex-direction:column;
justify-content:space-evenly;
gap:5px;
`
const Form = styled.div`
width:100%;
min-height:100vh;

display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
const Item = styled.div`
flex:1;
/* outline:1px solid yellow; */
max-height:35px;
`
const Input = styled.input`
width:100%;
height:25px;
border:1px solid gainsboro;
`
const Buttn = styled.button`
align-self:center;
 height: 30px;
  /* width: 60px; */
  border: 1.5px solid gainsboro;
  cursor: pointer;
  color: #000;
  background-color: inherit;
  border-radius: 3px;
  text-transform:uppercase;
  width:100px;
  &:hover{
    background-color: #0d6efd;
    color: #fff;

  }
`
const Text = styled.h3``


type Props = {}

const Auth = (props: Props) => {
  return (
    <Container>
        <Form>
        <Text>Sign up</Text>
       <Wrapper>
    
       <Item>
                <Input type='text'placeholder='Enter  Name' required  />
               
            </Item>
            <Item>
                <Input type='text'placeholder='Enter Email' required />
               
            </Item>
            <Item>
                <Input type='text'placeholder='Enter passwrd'  required />
               
            </Item>
            <Buttn>Sign up
            </Buttn>
       </Wrapper>
       <Text>
       log in
       </Text>

       <Wrapper>
       
            <Item>
                <Input type='text'placeholder='Enter Email' required />
               
            </Item>
            <Item>
                <Input type='text'placeholder='Enter passwrd'  required />
               
            </Item>
            <Buttn>  log in</Buttn>
       </Wrapper>
 
        </Form>
    </Container>
  )
}

export default Auth