import {useNavigate} from "react-router-dom"
import { Logo } from "../Logo/Logo"
import {useAuth} from "../../hooks/useAuth"
import {ButtonContent, HeaderContent} from "./header.styles"

export const Header = () => {
  const goForHome = useNavigate()
  const {user, signOut} = useAuth()

  const signOutForHome = () => {
    signOut()
    goForHome("/")
  }
  
  return (
    <HeaderContent>
      <Logo/>
      {user && <ButtonContent onClick={signOutForHome}>Sair</ButtonContent>}
    </HeaderContent>
  )
}