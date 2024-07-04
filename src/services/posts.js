import { postsModel } from "../model/mongoDB/posts.js"

class postsService {
  static getAllPosts = async () => {
    try {
      const allPosts = await postsModel.getAllPosts()
      return allPosts
    } catch (error) {
      console.log("SERVICE: Not posible get all posts")
    }
  }

  static postNew = async (input) => {
    try {
      const newPost = await postsModel.postNew(input)
      return newPost
    } catch (error) {
      console.log("SERVICE: Not posible create the post", error)
    }
  }

  static deletePost = async () => {

  }

  static editPost = async () => {

  }
}

export {
  postsService
}