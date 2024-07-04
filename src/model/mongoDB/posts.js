import { dbConnection } from "../../config/mongoDB/dbConnection.js"

class postsModel {
  static getAllPosts = async () => {
    const DB = await dbConnection()
    const allPostsCollection = await DB.find({}).toArray()
    console.log(allPostsCollection)
    return allPostsCollection
  }

  static postNew = async (input) => {
    const DB = await dbConnection()
    const { insertedId } = await DB.insertOne(input)
    return await DB.findOne({_id: insertedId})
  }

  static deletePost = async () => {
    const DB = dbConnection()
  }

  static editPost = async () => {
    const DB = dbConnection()
  }
}

export {
  postsModel
}