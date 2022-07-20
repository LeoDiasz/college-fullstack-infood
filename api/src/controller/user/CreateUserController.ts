import {Response, Request} from "express";
import { CreateUserServices } from "../../services/user/CreateUserServices";

export class CreateUserController {
  async execute(request : Request, response : Response) {
    const {name, email , password} = request.body;
    
    const userServices = new CreateUserServices();

    const result = await userServices.services({name, email, password})

    return response.status(201).json(result)
    
  }
}