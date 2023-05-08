import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import { useGetOneNoteQuery } from '../states/State';

const Container = styled.div`
  width: 90%;
  min-height: 100vh;
  display: flex;
  /* outline:1px solid black; */
  flex-direction: column;
  gap: 20px;
  position:relative;
`;
const H1 = styled.h1``;
const Button = styled.button`
  height: 30px;
  /* width: 60px; */
  border: 1.5px solid gainsboro;
  cursor: pointer;
  color: #000;
  background-color: inherit;
  border-radius: 3px;
  text-transform:uppercase;
`;
const BtnGroup = styled.div`
  display: flex;
  margin-top: 10px;
  margin-bottom: 50px;
  gap: 10px;
  width: 100%;
  justify-content: flex-end;
  position:absolute;
  top:20px; 
`;
const Notes = styled.div`

`
const Tags = styled.div`
display:flex;
gap:5px;
margin-top:-2;

`
const Tag = styled.p`
background-color:#0d6efd;
color:#fff;
padding:2px;
border-radius:5px;


`
type Props = {}

const ReadNote = (props: Props) => {
    const navigate = useNavigate()
    const noteId = useLocation().pathname.split("/")[1]

    const {data:noteData, isLoading} = useGetOneNoteQuery(noteId)
    if(isLoading) return<>Loading...</>
  return (

    <Container>
    <H1>{noteData?.title}</H1>
    <Tags>{
      noteData?.tags?.map((item, i)=>{
        return <Tag key={i} >{ item.label } </Tag>
      })
      
      }</Tags>
    <BtnGroup>
        <Button onClick={()=>navigate("/edit", {state:noteData})}  style={{ color: "#fff", backgroundColor: "#0d6efd" }}>
          Edit
        </Button>
        <Button style={{ border:"1px solid  #e43232"}}  >Delete</Button>
        <Button onClick={()=>navigate("/")}  >back</Button>
      </BtnGroup>

    <Notes>
      {noteData?.body}
    </Notes>
   
  </Container>
    
  )
}

export default ReadNote