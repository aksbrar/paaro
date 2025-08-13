// imports
import http from "node:http"
import { serveStatic } from "./utils/serveStatic.js"
import { getAiRes } from "./ai-handiling/aiResponse.js"
import { sendRes } from "./utils/sendRes.js"

// port
const port = 8000

// cwd
const __dirname = import.meta.dirname

// create server
const server = http.createServer(async (req, res) => {
  if(req.url.startsWith("/api")){
    if (req.url == "/api/answer" && req.method == "POST"){
      // variable for body sent
      let body = ""

      // store body 
      req.on('data', chunk => {
        body += chunk
      })

      // send res
      req.on('end', async ()=>{
        // get ai response
        getAiRes(res, JSON.parse(body))
      })
    }
  }
  
  else{
    serveStatic(req, res, __dirname)
  }
})

// listen to port 
server.listen(port)