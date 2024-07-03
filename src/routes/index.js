import { Router } from "express";
import { POSTSROUTER } from "./posts.js"
import { IndexController } from "../controllers/index.js"

const INDEXROUTER = Router()
INDEXROUTER.get("/", IndexController.getIndex)

INDEXROUTER.use("/posts", POSTSROUTER)

export {
  INDEXROUTER
}