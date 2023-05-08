import { BrowserRouter, Routes, Route } from "react-router-dom"
import styled from "styled-components"
import New from "./pages/New"
import Home from "./pages/Home"
import ReadNote from "./pages/ReadNote"
import Edit from "./pages/Edit"
import Auth from "./pages/Auth"

const Container = styled.div`
  width:100%; 
  min-height:100vh;
   /* outline:1px solid red; */
   display:flex;
   flex-direction:column;
   align-items:center;
`
function App() {
 

  return (
    <BrowserRouter>
    <Container>
     <Routes>
      <Route path="/">
       <Route index  element={<Home/>} />
      <Route path="/:id" element={<ReadNote/>} />
      </Route>
      <Route path="/new" element={<New/>} /> 
      <Route path="/auth" element={<Auth/>} />   
      <Route path="/edit" element={<Edit/>} />     
      
      </Routes>     
     
    </Container>
    </BrowserRouter>
  )
}

export default App
