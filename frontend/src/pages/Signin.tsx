import axios from "axios";
import { Button } from "../components/Button"
import { InputContainer } from "../components/InputContainer"
import { useState } from "react";

export const Signin =()=>{
   const[email,setEmail]=useState<string>();
   const [password,setPassword]=useState<string>();

     return <div>
        <label>Email:</label>
        <InputContainer onChange={(e)=>setEmail(e.target.value)} placeholder={"Enter email"}/>
        <label>Password:</label>
        <InputContainer onChange={(e)=>setPassword(e.target.value)} placeholder={"Enter password"}/>
        <Button onClick={
         async ()=>{
            await axios.post("http://localhost:3000/main/user/signin",{
               email,
               password
            })
         }
        } text={"Signin"}/>
     </div>
}