import { Router } from "express";
import {CreateRecipeController} from "../../controller/recipe/CreateRecipeController"
import {GetRecipesController} from "../../controller/recipe/GetRecipesController"
import { GetRecipeController } from "../../controller/recipe/GetRecipeController";
import { ensureAuthenticated } from "../../middlewares/ensureAuthenticated";
const recipeRoutes = Router()


recipeRoutes.post("/recipe", ensureAuthenticated, new CreateRecipeController().execute)
recipeRoutes.get("/recipe", new GetRecipesController().execute)
recipeRoutes.get("/recipe/:id", ensureAuthenticated, new GetRecipeController().execute)
recipeRoutes.put("/recipe:id", ensureAuthenticated)
recipeRoutes.delete("/recipe/:id", ensureAuthenticated)


export {recipeRoutes}