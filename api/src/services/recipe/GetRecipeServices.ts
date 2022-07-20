import {AppError} from "../../errors/AppError"
import {prismaClient} from "../../prismaClient/prismaClient"

class GetRecipeServices {
  async services(id: string) {
    
    if (!id) {
      throw new AppError("Necessary id")
    }

    const user = await prismaClient.recipe.findFirst({where: {
      id: id
    }})

    if (!user) {
      throw new AppError("recipe dont exists")
    }

    return user
  }
}

export {GetRecipeServices}