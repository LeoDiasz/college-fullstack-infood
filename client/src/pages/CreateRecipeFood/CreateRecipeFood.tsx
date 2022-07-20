import {useAuth} from "../../hooks/useAuth"
import {useState, FormEvent} from "react"
import {useNavigate} from "react-router-dom"
import {Toaster, toast} from "react-hot-toast";
import { api } from "../../services/api";
import {MainListRecipesText} from "../../components/MainListRecipesText/MainListRecipesText"
import {Header} from "../../components/Header/Header"
import {ButtonInitial} from "../../components/ButtonInitial/ButtonInitial"
import {SectionContent, DivContent, FormContent, InputContent } from "./createRecipe.styles"

export const CreateRecipeFood = () => {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [url, setUrl] = useState("")
  const {user} = useAuth()
  const goListRecipes = useNavigate()

  const goForListRecipes = () => {
    
    goListRecipes("/recipes")
  }

  const createNewRecipes = async (event: FormEvent) => {
    event.preventDefault()

    if (!name || !description || !url) {
      return
    }

 
    if (!user) {
      toast.error("Precisa estar autenticado para criar receita.")
      return
    }

    const newRecipe = {
      name,
      description,
      url,
      user_id: user.id,
    }

    debugger
    try {
      const {data: recipeCreated} = await api.post("/recipe", newRecipe, {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      })

      console.log(recipeCreated)
      toast.success("Receita criada com sucesso")
      goForListRecipes()

    } catch {
      toast.error("Não foi possivel criar a receita, token expirado")
      return
    }


  }

  return (
  <DivContent>
    <Toaster></Toaster>
    <Header/>
    <SectionContent>
      <MainListRecipesText text="Crie sua receita" textButton="Ver receitas" goForButton={goForListRecipes}/>
      <FormContent onClick={event => createNewRecipes(event)}>
        <InputContent type="text" placeholder="Digite o nome da receita" onChange={event => setName(event.target.value)} required/>
        <InputContent type="text" placeholder="Digite o passo a passo da receita" onChange={event => setDescription(event.target.value)} required/>
        <InputContent type="text" placeholder="Digite a url da imagem" onChange={event => setUrl(event.target.value)} required/>
        <ButtonInitial text="Criar receita"/>
      </FormContent>
    </SectionContent>
  </DivContent>
  )
}