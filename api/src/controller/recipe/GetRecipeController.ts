import {Request, Response} from "express"
import {GetRecipeServices} from "../../services/recipe/GetRecipeServices"

class GetRecipeController {
  async execute(request: Request, response: Response) {
    const {id} = request.params

    const getServices = new GetRecipeServices()

    const result = await getServices.services(id)

    return response.status(200).json(result)
    
  }
}

export {GetRecipeController}