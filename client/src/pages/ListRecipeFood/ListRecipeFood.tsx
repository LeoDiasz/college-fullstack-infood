import { useEffect, useState } from "react"
import {useNavigate} from "react-router-dom"
import {Toaster, toast} from "react-hot-toast";
import {useAuth} from "../../hooks/useAuth"
import {api} from "../../services/api"
import { MainListRecipesText } from "../../components/MainListRecipesText/MainListRecipesText"
import { CardRecipe } from "../../components/CardRecipe/CardRecipe"
import { Header } from "../../components/Header/Header"
import { ListRecipe, SectionContent, DivContent } from "./listRecipe.styles"

type ListRecipesDatas = {
  id: string,
  name: string,
  description: string,
  url: string
}

export const ListRecipeFood = () => {
  const [listRecipes, setListRecipes] = useState<ListRecipesDatas[] | null>([])
  const goForCreateRecipe = useNavigate()
  const {user} = useAuth()

  const searchRecipes = async () => {
    
    try {
      const {data: list} = await api.get<ListRecipesDatas[]>("/recipe")

      setListRecipes(list)
    
    } catch {
      console.log("Erro ao buscar")
    }
    
  }

  const createRecipe = () => {
    if(!user) {
      toast.error("Precisa estar logado pra criar receita")
      return 
     }

    goForCreateRecipe("/recipes/new")
  }
  
  useEffect( () => {
 
    searchRecipes()

  }, []);


 return (
  <DivContent>
    <Toaster></Toaster>
    <Header/>
    <SectionContent>
      <MainListRecipesText text="Receitas" textButton="Criar receita" goForButton={createRecipe}/>
      <ListRecipe>
       {listRecipes && listRecipes.map(recipe => (
          <CardRecipe img={recipe.url} name={recipe.name} description={recipe.description} key={recipe.id} />
        ))}
      </ListRecipe>
    </SectionContent>
  </DivContent>
 ) 
}