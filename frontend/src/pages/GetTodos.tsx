/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios"
import { Button } from "../components/Button"
import { useState } from "react";

interface Todo{
    id:number,
    title:string,
    description:string,
    published:boolean,
    userId:number
}
 const GetTodos=()=>{
    const [todos,setTodos]=useState<Todo[]>([])

    
    return <div>
        <Button text={"get todos"} onClick={
            async ()=>{
               const res= await axios.get("http://localhost:3000/main/todo/all");
               setTodos(res.data.todos)
            }
        }/>

        <div>
            {todos.map(todo=>(
                 <div key={todo.id}>
                 <h2>{todo.title}</h2>
                 <p>{todo.description}</p>
                 <p>Published: {todo.published ? "Yes" : "No"}</p>
                 <p>User ID: {todo.userId}</p>
                 </div>
            )
            )}
        </div>

    </div>
}

export default GetTodos;