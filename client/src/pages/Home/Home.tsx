import { FormEvent, useState } from "react"
import {Toaster, toast} from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom"
import { ButtonInitial } from "../../components/ButtonInitial/ButtonInitial"
import { SectionMain } from "../../components/SectionMain/SectionMain"
import { Logo } from "../../components/Logo/Logo"
import {useAuth} from "../../hooks/useAuth"
import {DivContent, DivMain, FormContent, MainContent, InputContent} from "./home.styles"



export const Home = () => {
  const {user, signIn} = useAuth()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const enterInRecipes = useNavigate()

  const signWithUser = async (event: FormEvent) => {
    event.preventDefault()

      try {
        const result = await signIn({email, password})
        
        if(!result) {
          throw new Error("Erro ao realizar login")
        }
      
        toast.success("Logado com sucesso")
      } catch {
        toast.error("Erro ao realizar o login")
        return
      }
  
    enterInRecipes("/recipes")
  }

  return (
  <DivContent>
    <Toaster></Toaster>
    <MainContent>
      <DivMain>
        <Logo/>
        <h1>Realizar Login</h1>
        <FormContent onSubmit={signWithUser}>
          <InputContent type="email" placeholder="Email" onChange={event => setEmail(event.target.value)}/>
          <InputContent type="password" placeholder="Senha" onChange={event => setPassword(event.target.value)} />
          <ButtonInitial text="Login"/>
        </FormContent>
        <div>
          <Link to="/recipes">Ver salas</Link>
          <Link to="/user/new">Criar conta</Link>
        </div>
       
      </DivMain>
    </MainContent>
    <SectionMain/>
  </DivContent>
  )
}