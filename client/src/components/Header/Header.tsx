import { Logo } from "../Logo/Logo"
import {ButtonContent, HeaderContent} from "./header.styles"
import {useAuth} from "../../hooks/useAuth"

export const Header = () => {
  
  const {user, signOut} = useAuth()
  console.log(user)

  return (
    <HeaderContent>
      <Logo/>
      {user && <ButtonContent onClick={signOut}>Sair</ButtonContent>}
    </HeaderContent>
  )
}