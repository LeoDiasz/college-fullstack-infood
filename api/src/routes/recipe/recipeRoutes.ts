import { Router } from "express";
import {CreateRecipeController} from "../../controller/recipe/CreateRecipeController"

const recipeRoutes = Router()


recipeRoutes.post("/recipe", new CreateRecipeController().execute)
recipeRoutes.get("/recipe")
recipeRoutes.get("recipe/:id")
recipeRoutes.put("recipe:id")
recipeRoutes.delete("recipe/:id")


export {recipeRoutes}