import { Link } from "react-router-dom"
import { FormEvent, useState } from "react"
import {Toaster, toast} from "react-hot-toast";
import { api } from "../../services/api";
import { SectionMain } from "../../components/SectionMain/SectionMain"
import {ButtonInitial} from "../../components/ButtonInitial/ButtonInitial"
import { DivContent, DivSection, FormContent, SectionContent, InputContent} from "./createUser.styles"

import {Logo} from "../../components/Logo/Logo"

export const CreateUser = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const registerNewUser = async (event: FormEvent) => {
    event.preventDefault()

    if(!name || !email || !password) {
    
      return
    }

    const newUser = {
      name,
      email,
      password
    }

    try { 
      const user = await api.post("/user", newUser)

      toast.success("Usuário criado com sucesso")
      return

    } catch(Error) {
      toast.error("Erro ao criar a conta. Já pode este usuário estar registrado")
    }

  }


  return (
    <DivContent>
      <Toaster></Toaster>
      <SectionContent>
        <DivSection>
          <Logo/>
          <h1>Criar conta</h1>
          <FormContent  onClick={registerNewUser}>
            <InputContent type="text" placeholder="Nome" onChange={event => setName(event.target.value)}/>
            <InputContent type="email" placeholder="Email" onChange={event => setEmail(event.target.value)}/>
            <InputContent type="password" placeholder="Senha" onChange={event => setPassword(event.target.value)} />
            <ButtonInitial text="Criar conta"/>
          </FormContent>

          <Link to="/">Fazer Login</Link>
        </DivSection>
      </SectionContent>
      <SectionMain/>
    </DivContent>
    
  )
}