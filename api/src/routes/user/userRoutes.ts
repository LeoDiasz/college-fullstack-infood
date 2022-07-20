import {Router} from "express";
import { AuthenticateUserController } from "../../controller/user/AuthenticateUserController";
import { CreateUserController } from "../../controller/user/CreateUserController";
import { GetUserProfileController } from "../../controller/user/GetUserProfileController";
import {GetUsersController} from "../../controller/user/GetUsersController"
import { ensureAuthenticated } from "../../middlewares/ensureAuthenticated";

const userRoutes = Router();

userRoutes.post("/user/authenticate", new AuthenticateUserController().execute)
userRoutes.post("/user", new CreateUserController().execute);
userRoutes.get("/user", new GetUsersController().execute);
userRoutes.get("/user/:id", ensureAuthenticated, new GetUserProfileController().execute)
userRoutes.put("/user/:id", ensureAuthenticated)
userRoutes.delete("/user/:id", ensureAuthenticated)

export {userRoutes}