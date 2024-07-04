import { postsService } from "../services/posts.js"
import { validePost } from "../schemas/posts.js"

class postsController {
  static getAllPosts = async (req, res) => {
    try {
      const allPosts = await postsService.getAllPosts()
      res.status(200).json(allPosts)
    } catch (error) {
      res.status(404).json({
        error: error.message,
        error: "CONTROLLER: Not posible get all posts"
      })
    }
  }

  static postNew = async (req, res) => {
    try {
      const postValidate = validePost(req.body)
      const newPost = await postsService.postNew(postValidate)
      res.status(201).json(newPost)
    } catch (error) {
      res.status(422).json({
        errorDataValide: error.message,
        error: "CONTROLLER: Not posible create the post"
      })
      
    }
  }

  static deletePost = async (req, res) => {

  }

  static editPost = async (req, res) => {

  }
}

export {
  postsController
}