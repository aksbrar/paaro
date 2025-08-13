// imports
import http from "node:http"
import { serveStatic } from "./utils/serveStatic.js"

// port
const port = 8000

// cwd
const __dirname = import.meta.dirname

// create server
const server = http.createServer(async (req, res) => {
  if(req.url == "/api"){
    // later
  }
  
  else if (req.url != "/api"){
    serveStatic(req, res, __dirname)
  }
})

// listen to port 
server.listen(port)