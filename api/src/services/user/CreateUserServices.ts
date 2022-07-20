import {AppError} from "../../errors/AppError"
import {prismaClient} from "../../prismaClient/prismaClient"
import {hash} from "bcrypt"

interface CreateUserDatas {
  name: string;
  email: string;
  password: string;
}


export class CreateUserServices {
  async services({name, email, password}: CreateUserDatas) {
    
    if(!email && !password) {
      throw new AppError("Email and password invalid.")
    }

    if (!name || !email || !password) {
      throw new AppError("Email and password invalid.")
    }
    
    const userIsExists = await prismaClient.user.findFirst({where: {
      email: email
    }})

    if(userIsExists) {
      throw new AppError("Email already register.")
    }

    const passwordHash = await hash(password, 8)

    const result = await prismaClient.user.create({
      data: {
        name: name,
        email: email,
        password: passwordHash
      }
    })

    return result   
  }
}