import {Response, Request} from "express";
import { CreateRecipeServices } from "../../services/recipe/CreateRecipeServices";

class CreateRecipeController {
  async execute(request : Request, response : Response) {
    const {name, description, user_id} = request.body;
   
    const recipeServices = new CreateRecipeServices();

    const result = await recipeServices.services({name, description, user_id})

    return response.status(201).json(result)
    
  }
}

export {CreateRecipeController}