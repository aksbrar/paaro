// imports
import http from "node:http"

// port
const port = 8000

// create server
const server = http.createServer((req, res) => {
  if (req.url = "/"){
    res.end("Hi")
  }
})

// listen to port 
server.listen(port)