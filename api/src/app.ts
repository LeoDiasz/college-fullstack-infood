import express, {Request, Response, NextFunction} from "express";
import "express-async-errors";

import {AppError} from "./errors/AppError"
import {userRoutes} from "./routes/user/userRoutes"
import {recipeRoutes} from "./routes/recipe/recipeRoutes"

const cors = require("cors")

const app = express();

app.use(express.json())

app.listen(4000, () => console.log("server is running"))

app.use(cors())
app.use(userRoutes)
app.use(recipeRoutes)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if(err instanceof AppError) {
    return res.status(err.status).json({error: err.message})
  }

  
  return res.status(500).json({status: "Internal server error"})
})