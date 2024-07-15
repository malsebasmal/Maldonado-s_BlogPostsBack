import { postsService } from "../services/posts.js"
import { partialValidePost, validePost } from "../schemas/posts.js"

class postsController {
  static getAllPosts = async (req, res) => {
    try {
      const allPosts = await postsService.getAllPosts()
      res.status(200).json(allPosts)
    } catch (error) {
      res.status(404).json({
        error: error.message,
        error: "Not possible get all posts"
      })
    }
  }

  static getOnePost = async (req, res) => {
    try {
      const { id } = req.params
      const onePost = await postsService.getOnePost(id)
      res.status(200).json(onePost)
    } catch (error) {
      res.status(404).json({
        error: error.message,
        error: "Not possible get post"
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
        error: "Not possible create the post"
      })
      
    }
  }

  static deletePost = async (req, res) => {
    try {
      const { id } = req.params
      const postDelete = await postsService.deletePost(id)
      res.status(200).json(postDelete)
    } catch (error) {
      res.status(404).json({
        errorDelete: error.message,
        error: "Not possible delete the post"
      })
    }
  }

  static editPost = async (req, res) => {
    try {
      const { id } = req.params
      const postValidate = partialValidePost(req.body)
      const newPostUpdate = await postsService.editPost(id, postValidate)
      res.status(202).json(newPostUpdate)
    } catch (error) {
      res.status(400).json({
        errorUpdate: error.message,
        error: "Not possible update the post"
      })
    }
  }
}

export {
  postsController
}