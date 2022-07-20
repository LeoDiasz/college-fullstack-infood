import {AppError} from "../../errors/AppError"
import {prismaClient} from "../../prismaClient/prismaClient"

interface CreateRecipeDatas {
  name: string;
  description: string;
  user_id: string;
}



class CreateRecipeServices {
  async services({name, description, user_id}:CreateRecipeDatas) {

    if(!name || !description || !user_id) {
      throw new AppError("Necessary all parameters.")
    }

    const userIsExists = await prismaClient.user.findFirst({where: {id: user_id}})

    if (!userIsExists) {
      throw new AppError("User dont exists.")
    }

    const newRecipe = await prismaClient.recipe.create({
      data: {
        user_id,
        name,
        description
      }
    })
    
    return newRecipe
    
  }
}

export {CreateRecipeServices}