import {AppError} from "../../errors/AppError"
import {prismaClient} from "../../prismaClient/prismaClient"

class GetRecipesServices {
  async services() {
    const existsRecipes = await prismaClient.recipe.findMany()

    if (!existsRecipes) {
      throw new AppError("dont exists recipes.")
    }

    return existsRecipes
    
  }
}

export {GetRecipesServices}