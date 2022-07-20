import { useEffect, useState } from "react"
import { CardRecipe } from "../../components/CardRecipe/CardRecipe"
import { Header } from "../../components/Header/Header"
import { MainListRecipesText } from "../../components/MainListRecipesText/MainListRecipesText"
import {api} from "../../services/api"
import { ListRecipe, SectionContent, DivContent } from "./listRecipe.styles"

type ListRecipesDatas = {
  id: string,
  name: string,
  description: string,
  url: string
}

export const ListRecipeFood = () => {
  const [listRecipes, setListRecipes] = useState<ListRecipesDatas[] | null>([])

  const searchRecipes = async () => {
    
    try {
      const {data: list} = await api.get<ListRecipesDatas[]>("/recipe")

      setListRecipes(list)
    
    } catch {
      console.log("Erro ao buscar")
    }
    
  }
  
  useEffect( () => {

    searchRecipes()

  }, []);


 return (
  <DivContent>
    <Header/>
    <SectionContent>
      <MainListRecipesText/>
      <ListRecipe>
       {listRecipes && listRecipes.map(recipe => (
          <CardRecipe img={recipe.url} name={recipe.name} description={recipe.description} key={recipe.id} />
        ))}
      </ListRecipe>
    </SectionContent>
  </DivContent>
 ) 
}