import { Router } from "express";
import { postsController } from "../controllers/posts.js";

const POSTSROUTER = Router()

POSTSROUTER.get("/", postsController.getAllPosts)
POSTSROUTER.post("/", postsController.postNew)
POSTSROUTER.delete("/:id", postsController.deletePost)
POSTSROUTER.patch("/:id", postsController.editPost)

export {
  POSTSROUTER
}