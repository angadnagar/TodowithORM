import { ChangeEvent } from "react"

interface inputParam{
  placeholder:string,
  onChange:(e:ChangeEvent<HTMLInputElement>)=>void
}
export const InputContainer = ({placeholder,onChange}:inputParam) =>{
      return <div>
        <input type="text" onChange={onChange} placeholder={placeholder} />
      </div>
}
