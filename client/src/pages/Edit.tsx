import React from "react";
import styled from "styled-components";
import CreatableSelect from "react-select/creatable";
import { useNavigate } from "react-router-dom";

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

const Edit = (props: Props) => {
  const navigate = useNavigate();
  const cancelBtn = () => {
    navigate("/8");
  };
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
          <Input type="text" placeholder="Title" />
        </InputWrapper>
        <InputWrapper>
          <Label>Tags</Label>
          <CreatableSelect isMulti />
        </InputWrapper>
      </Items>
      <Items>
        <InputWrapper style={{ width: "100%" }}>
          <Label>Body</Label>
          <TextArea>Note</TextArea>
        </InputWrapper>
        <BtnGroup>
          <Button style={{ color: "#fff", backgroundColor: "#0d6efd" }}>
            save
          </Button>
          <Button onClick={cancelBtn} style={{ border:"1px solid  #e43232"}} >cancel</Button>
        </BtnGroup>
      </Items>
    </Container>
  );
};

export default Edit;
