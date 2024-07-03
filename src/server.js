import express, { json } from "express"
import { INDEXROUTER } from "./routes/index.js"
import cors from "cors";

const APPSERVER = express()
APPSERVER.disable("x-powered-by")

//Middlewares
APPSERVER.use(cors())
APPSERVER.use(json())

APPSERVER.use(INDEXROUTER)

export {
  APPSERVER
}