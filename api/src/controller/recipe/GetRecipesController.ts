import {Response, Request} from "express";
import {GetRecipesServices} from "../../services/recipe/GetRecipesServices"

class GetRecipesController {
  async execute(request : Request, response : Response) {
    const recipeServices = new GetRecipesServices();

    const result = await recipeServices.services()

    return response.status(200).json(result)
    
  }
}

export {GetRecipesController}