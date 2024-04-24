import { MouseEvent } from "react"

interface inputParam{
    text:string,
    onClick:(e:MouseEvent<HTMLButtonElement>)=>void
}
export const Button = ({text,onClick}:inputParam)=>{
    return <div>
        <button onClick={onClick}>
           {text}
        </button>
    </div>
}