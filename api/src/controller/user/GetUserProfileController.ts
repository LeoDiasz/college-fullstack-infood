import {Request, Response} from "express"
import {GetUserProfileServices} from "../../services/user/GetUserProfileServices"

class GetUserProfileController {
  async execute(request: Request, response: Response) {
    const {id} = request.params

    const getServices = new GetUserProfileServices()

    const result = await getServices.services(id)

    return response.status(200).json(result)
    
  }
}

export {GetUserProfileController}