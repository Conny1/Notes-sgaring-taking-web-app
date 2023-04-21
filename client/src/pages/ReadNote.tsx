import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'

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
type Props = {}

const ReadNote = (props: Props) => {
    const navigate = useNavigate()
  return (

    <Container>
    <H1>Titel and tags</H1>
    <BtnGroup>
        <Button onClick={()=>navigate("/edit")}  style={{ color: "#fff", backgroundColor: "#0d6efd" }}>
          Edit
        </Button>
        <Button style={{ border:"1px solid  #e43232"}}  >Delete</Button>
        <Button onClick={()=>navigate("/")}  >back</Button>
      </BtnGroup>

    <Notes>
   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus ipsam reiciendis veniam omnis adipisci dolor explicabo nihil labore perspiciatis vero, molestias blanditiis nulla incidunt eaque in, laborum, unde dolore necessitatibus asperiores eius id cumque? Officia pariatur eligendi libero ullam, dicta possimus iste placeat doloremque quo optio voluptatem nam, similique corporis!
    </Notes>
   
  </Container>
    
  )
}

export default ReadNote