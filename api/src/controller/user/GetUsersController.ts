import {Request, Response} from "express";
import {GetUsersServices} from "../../services/user/GetUsersServices"

class GetUsersController {
  async execute(request: Request, response: Response) {
    
    const getServices = new GetUsersServices()

    const result = await getServices.services()

    return response.status(200).json(result)
  }
}


export {GetUsersController}