import {AppError} from "../../errors/AppError"
import {prismaClient} from "../../prismaClient/prismaClient"
import {compare} from "bcrypt"
import {sign} from "jsonwebtoken"

interface AuthenticateUserDatas {
  email: string,
  password: string,
}

interface IResponse {
  user: {
    name: string,
    email: string,
  }
  token: string
}

class AuthenticateUserServices {
  async services({email, password}:AuthenticateUserDatas): Promise<IResponse> {
    
    if (!email || !password) {
      throw new AppError("User or password is incorrect")
    }
    const user = await prismaClient.user.findFirst({where: {email: email}})
    
    if(!user) {
      throw new AppError("User or password is incorrect")
    }
    
    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) {
      throw new AppError("User or password is incorrect")
    }

    const hashGenerator = "82f009ff64d7b602c54704b69f8c3e37"
    const token = sign({}, hashGenerator, {subject: user.id, expiresIn: "1d"})

    const tokenReturn : IResponse = {
      token,
      user: {
        name: user.name,
        email: user.email
      }
    }

    return tokenReturn

    

  }
}

export {AuthenticateUserServices}