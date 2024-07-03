import "dotenv/config"
import { APPSERVER } from "./server.js"

const PORT = process.env.PORT ?? 8080

let serverStart = async () => {
  try {
    APPSERVER.listen(PORT, () => {
      console.log(`Executing server on port http://localhost:${PORT}`)
    })
  } catch (error) {
    console.log("Error for the starting server", error)
    process.exit(1)
  }
}

serverStart()
