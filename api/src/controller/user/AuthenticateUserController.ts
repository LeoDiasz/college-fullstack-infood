import {Response, Request} from "express";
import {AuthenticateUserServices} from "../../services/user/AuthenticateUserServices"

class AuthenticateUserController {
  async execute(request: Request, response: Response) {
    const {email, password} = request.body

    const authenticateServices = new AuthenticateUserServices()

    const result = await authenticateServices.services({email, password})

    return response.status(201).json(result)
  }
}

export {AuthenticateUserController}