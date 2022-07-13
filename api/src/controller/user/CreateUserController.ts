import {Response, Request} from "express";
import { CreateUserServices } from "../../services/user/CreateUserServices";

export class CreateUserController {
  async execute(request : Request, response : Response) {
    const {name, cpf, email , password} = request.body;
    
    const userServices = new CreateUserServices();

    const result = await userServices.services({name, cpf, email, password})

    return response.json(result)
    
  }
}