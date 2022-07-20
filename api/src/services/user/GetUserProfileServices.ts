import {AppError} from "../../errors/AppError"
import {prismaClient} from "../../prismaClient/prismaClient"

class GetUserProfileServices {
  async services(user_id: string) {
    
    if (!user_id) {
      throw new AppError("Necessary id")
    }

    const user = await prismaClient.user.findFirst({where: {
      id: user_id
    }})

    if (!user) {
      throw new AppError("User dont exists")
    }

    return user
  }
}

export {GetUserProfileServices}