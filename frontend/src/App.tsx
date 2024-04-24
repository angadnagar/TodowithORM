// import {BrowserRouter,Routes,Route} from

import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Signup } from "./pages/Signup"
import { Signin } from "./pages/Signin"
import { CreateTodo } from "./pages/CreateTodo"
import GetTodos from "./pages/GetTodos"


function App() {


  return (
    <>
        <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/create" element={<CreateTodo/>}/>
          <Route path="/todos" element={<GetTodos/>}/>

        </Routes>
     </BrowserRouter>
     </>
  )
}

export default App
