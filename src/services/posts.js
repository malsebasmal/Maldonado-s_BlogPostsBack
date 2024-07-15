import { postsModel } from "../model/mongoDB/posts.js"

class postsService {
  static getAllPosts = async () => {
    try {
      const allPosts = await postsModel.getAllPosts()
      return allPosts
    } catch (error) {
      console.log("Not possible get all posts", error)
    }
  }

  static getOnePost = async (id) => {
    try {
      const onePost = await postsModel.getOnePost(id)
      return onePost
    } catch (error) {
      console.log("Not possible get post", error)
    }
  }

  static postNew = async (input) => {
    try {
      const newPost = await postsModel.postNew(input)
      return newPost
    } catch (error) {
      console.log("Not possible create the post", error)
    }
  }

  static deletePost = async (id) => {
    try {
      const postDelete = await postsModel.deletePost(id)
      return postDelete
    } catch (error) {
      console.log("Not possible delete the post", error)
      throw error
    }
  }

  static editPost = async (id, newPostBody) => {
    try {
      const newPostUpdate = await postsModel.editPost(id, newPostBody)
      return newPostUpdate
    } catch (error) {
      console.log("Not possible update the post", error)
      throw error
    }
  }
}

export {
  postsService
}