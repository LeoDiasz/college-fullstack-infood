import { InputContent } from "./input.styles";
import {InputHTMLAttributes} from "react"

type InputDatas = InputHTMLAttributes<HTMLInputElement> & {
  type: string;
  placeholder: string;
}

export const Input = ({type, placeholder}: InputDatas) => {
  return (
    <InputContent type={type} placeholder={placeholder}/>
  )
}