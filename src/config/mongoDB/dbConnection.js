import { MongoClient, ServerApiVersion, ObjectId } from "mongodb"
import "dotenv/config"

const uri = "mongodb+srv://"+process.env.USER+":"+process.env.PASSWORD+"@cluster0.drml1bt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
})

async function dbConnection() {
  try {
    await client.connect()
    const DATABASE = client.db("postsDB")
    return DATABASE.collection("posts")
  } catch (error) {
    console.log("Not possible connect DB", error)
    await client.close()
  }
}

export {
  dbConnection,
  ObjectId
}