import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
/* width:35%; */
flex:1;
max-width:400px;
min-width:200px;
border:2px solid gainsboro;
border-radius:7px;
display:flex;
flex-direction:column;
align-items:center;
cursor: pointer;
&:hover{
    transition-duration:0.5s;
    box-shadow: 5px 5px #888888;
    font-size:17px;
}
`
const Items = styled.div`
display:flex;
justify-content:center;
gap:4px;
flex-wrap:wrap;
`
const Text = styled.p``
const Tags = styled.p`
background-color:#0d6efd;
color:#fff;
padding:1px;
border-radius:7px;

`
type Props = {}


const SharedNotes = (props: Props) => {
    const navigate = useNavigate()

    const navigateTobody=()=>{{
        navigate('/8')
    }}
  return (
    <Container onClick={navigateTobody} >
    <Text>Title</Text>
    <Items> <Tags>OOO</Tags>  <Tags>OOO</Tags>  <Tags>OOO</Tags>  <Tags>OOO</Tags>  <Tags>OOO</Tags> </Items>
    </Container>
  )
}

export default SharedNotes