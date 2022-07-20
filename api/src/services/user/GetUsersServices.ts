import {AppError} from "../../errors/AppError"
import {prismaClient} from "../../prismaClient/prismaClient"

class GetUsersServices {
  async services() {

    const result = await prismaClient.user.findMany()

    if (!result) {
      throw new AppError("dont exists user")
    }

    return result
  }
}

export {GetUsersServices}