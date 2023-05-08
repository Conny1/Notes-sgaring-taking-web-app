import React,{useState} from "react";
import styled from "styled-components";
import CreatableSelect from "react-select/creatable";
import { useLocation, useNavigate } from "react-router-dom";
import { Note, Notes } from "../states/types";
import { Tags } from "../states/types";
import { useUpdateNotesMutation } from "../states/State";

const Container = styled.div`
  width: 90%;
  min-height: 100vh;
  display: flex;
  /* outline:1px solid black; */
  flex-direction: column;
  gap: 20px;
`;
const Items = styled.div`
  /* outline:1px solid red; */
`;
const Input = styled.input`
  height: 30px;
  border: 1.5px solid gainsboro;
  border-radius: 3px;
`;
const TextArea = styled.textarea`
  height: 400px;
  width: 99.5%;
  border: 1.5px solid gainsboro;
  border-radius: 3px;
`;
const Label = styled.label`
  font-size: 20px;
  font-style: italic;
  font-weight: bold;
`;
const H1 = styled.h1``;
const Button = styled.button`
  height: 30px;
  width: 60px;
  border: 1.5px solid gainsboro;
  cursor: pointer;
  color: #000;
  background-color: inherit;
  border-radius: 3px;
`;
const BtnGroup = styled.div`
  display: flex;
  margin-top: 10px;
  margin-bottom: 50px;
  gap: 10px;
  width: 100%;
  justify-content: flex-end;
`;
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 40%;
`;
interface Props {}
// const userId = `643e6ff79dfacbfd301ca8f4`
const Edit = (props: Props) => {
  let DataToEdit = useLocation().state
 
  const [title, settitle] = useState < Notes["title"] > ("")
  const [body, setbody] = useState < Notes["body"] > ("")
  const [tags, settags] = useState<Array<Tags>> ([])
const  [ updateNotes,{ isLoading} ]  = useUpdateNotesMutation()

  const  UpdateNote= async ()=>{
    const data = {
      userId:DataToEdit.userId,
    title:title?title:DataToEdit.title,
    body: body?body:DataToEdit.body,
    tags: tags.length===0?DataToEdit.tags:tags,
    noteId:DataToEdit._id
    }
    console.log(data)
  const resp = await updateNotes(data)
   DataToEdit = resp
    console.log(DataToEdit)  

  }




  const navigate = useNavigate();
  const cancelBtn = () => {
    navigate("/");
  };
  if(isLoading) return<>Loading...</>
  return (
    <Container>
      <H1>Edit Note</H1>
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
          <Input type="text" placeholder="Title" defaultValue={DataToEdit?.title}  onChange={(e)=>settitle(e.target.value)} />
        </InputWrapper>
        <InputWrapper>
          <Label>Tags</Label>
          <CreatableSelect isMulti 
       
          defaultValue={DataToEdit?.tags.map((tag:any)=>( { label:tag.label, value:tag.value } ))}


          onChange={(tag)=>{
          
           settags( 
            tag.map((tag)=>( { label:tag.label, value:tag.value}) ))
          }}

          />
        </InputWrapper>
      </Items>
      <Items>
        <InputWrapper style={{ width: "100%" }}>
          <Label>Body</Label>
          <TextArea defaultValue={DataToEdit?.body} onChange={(e)=>setbody(e.target.value)} ></TextArea>
        </InputWrapper>
        <BtnGroup>
          <Button style={{ color: "#fff", backgroundColor: "#0d6efd" }} onClick={UpdateNote} >
            Update
          </Button>
          <Button onClick={cancelBtn}>cancel</Button>
        </BtnGroup>
      </Items>
    </Container>
  );
};

export default Edit;
