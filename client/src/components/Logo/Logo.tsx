import { Link } from "react-router-dom"
import logoImg from "../../assets/logo.png"
import {ImgContent} from "./logo.styles"

export const Logo = () => {
  return (
    <Link to="/">
      <ImgContent src={logoImg} alt="logo" width="80px" />
    </Link>
  )
}