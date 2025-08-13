// imports
import http from "node:http"
import { serveStatic } from "./utils/serveStatic.js"

// port
const port = 8000

// cwd
const __dirname = import.meta.dirname

// create server
const server = http.createServer(async (req, res) => {
  if (req.url != "/api"){
    const content = await serveStatic(req, __dirname)
  }
})

// listen to port 
server.listen(port)