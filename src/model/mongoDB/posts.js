import { dbConnection, ObjectId } from "../../config/mongoDB/dbConnection.js"

class postsModel {
  static getAllPosts = async () => {
    const DB = await dbConnection()
    const allPostsCollection = await DB.find({}).toArray()
    return allPostsCollection
  }

  static postNew = async (input) => {
    const DB = await dbConnection()
    const { insertedId } = await DB.insertOne(input)
    return await DB.findOne({_id: insertedId})
  }

  static deletePost = async (id) => {
    const DB = await dbConnection()
    const idPost = new ObjectId(id)
    
    const postDelete = await DB.findOne({ _id: idPost })

    if (!postDelete) {
      throw new Error ("Not possible found the post for delete")
    }

    await DB.deleteOne({_id: idPost})
    return postDelete
  }

  static editPost = async (id, newPostBody) => {
    const DB = await dbConnection()
    const idPost = new ObjectId(id)

    const newPostUpdate = await DB.findOneAndUpdate({_id: idPost}, {$set: newPostBody}, {returnDocument: "after"})

    if (!newPostUpdate) {
        throw new Error ("Not possible update the post")
    }

    return newPostUpdate
  }
}

export {
  postsModel
}