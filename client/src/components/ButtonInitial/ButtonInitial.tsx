import { Button } from "./button.styles"
import {ButtonHTMLAttributes} from "react"

type ButtonInitialData= ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string,
}

export const ButtonInitial = ({text}: ButtonInitialData) => {
  return (
    <Button>
      <span>{text}</span>
      </Button>
  )
}