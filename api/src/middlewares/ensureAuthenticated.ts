import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import {AppError} from "../errors/AppError"
import {prismaClient} from "../prismaClient/prismaClient"

interface IPayLoad {
  sub: string
}
export const ensureAuthenticated = async (request: Request, response: Response, next: NextFunction) => {
  const tokenResponse = request.headers.authorization

  if(!tokenResponse) {
    throw new AppError("Need to fill the token", 401);
  };
  
  const [, token] = tokenResponse.split(" ");
  
  try {
    const {sub: user_id} = verify(token, "82f009ff64d7b602c54704b69f8c3e37") as IPayLoad;

    const existsUser = await prismaClient.user.findFirst({where: {id: user_id}})

    if(!existsUser) {
      throw new AppError("User dont exists")
    }
    
    next();
  } catch {
    throw new AppError("dont authorizated", 401);
  };

}