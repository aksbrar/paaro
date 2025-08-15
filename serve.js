// imports
import http from "node:http"
import { serveStatic } from "./utils/serveStatic.js"
import { getAiRes } from "./ai-handiling/aiResponse.js"
import { sendRes } from "./utils/sendRes.js"
import { intiDb } from "./database/initDb.js"

// port
const port = 8000

// cwd
const __dirname = import.meta.dirname

// initiate db
const db = await intiDb()

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
        getAiRes(res, JSON.parse(body), db)
      })
    }
  }
  
  else{
    serveStatic(req, res, __dirname)
  }
})

// start server 
server.listen(port)

