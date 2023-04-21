import React from 'react'
import styled from 'styled-components';
import CreatableSelect from "react-select/creatable";
import SharedNotes from '../components/SharedNotes';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  width: 90%;
  min-height: 100vh;
  display: flex;
  /* outline:1px solid black; */
  flex-direction: column;
  gap: 20px;
  position:relative;
`;
const Items = styled.div`
  /* outline:1px solid red; */
`;
const Label = styled.label`
  font-size: 20px;
  font-style: italic;
  font-weight: bold;
`;
const Input = styled.input`
  height: 30px;
  border: 1.5px solid gainsboro;
  border-radius: 3px;
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
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 40%;
`;
const Notes = styled.div`
display:flex;
width:100%;
flex-wrap:wrap;
/* justify-content:space-between; */
gap:10px;
`

type Props = {}

const Home = (props: Props) => {
    const navigate = useNavigate()
  return (
    <Container>
      <H1>Community shared Notes(0)</H1>
      <BtnGroup>
          <Button onClick={()=>navigate("/new")}  style={{ color: "#fff", backgroundColor: "#0d6efd" }}>
            Create Notes
          </Button>
          <Button >Edit tags</Button>
        </BtnGroup>
      <Items
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <InputWrapper>
          <Label>Title</Label>
          <Input type="text" placeholder="Title" />
        </InputWrapper>
        <InputWrapper>
          <Label>Tags</Label>
          <CreatableSelect isMulti />
        </InputWrapper>
      </Items>
      <Notes>
        <SharedNotes/>
        <SharedNotes/>
        <SharedNotes/>
        <SharedNotes/>
        <SharedNotes/>
        <SharedNotes/>
      </Notes>
     
    </Container>
  )
}

export default Home