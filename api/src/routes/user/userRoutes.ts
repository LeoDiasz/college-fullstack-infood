import {Router} from "express";
import { CreateUserController } from "../../controller/user/CreateUserController";
import { GetUserProfileController } from "../../controller/user/GetUserProfileController";
import {GetUsersController} from "../../controller/user/GetUsersController"


const userRoutes = Router();


userRoutes.post("/user", new CreateUserController().execute);
userRoutes.get("/user", new GetUsersController().execute);
userRoutes.get("/user/:id", new GetUserProfileController().execute)
userRoutes.put("/user/:id")
userRoutes.delete("/user/:id")

export {userRoutes}