// imports
import fs from "node:fs/promises"
import path from "node:path"
import { sendRes } from "./sendRes.js"
import { getContentType } from "./getContentType.js"

export const serveStatic = async (req, res,  absolutepath) => {
  try {
    // get public path
    const publicPath = path.join(absolutepath, 'public')
    const filepath = req.url == "/" ? "index.html" : req.url

    // read file path
    const fileToRead = path.join(publicPath, filepath)

    // read content from file
    const content = await fs.readFile(fileToRead)
    
    // extesions data
    const extension = path.extname(fileToRead)
    const contentType = getContentType(extension)

    // send response
    sendRes(res, 200, contentType, content)

  } catch (error) {
    if (error.code == "ENOENT"){
      sendRes(res, 404, "text/plain", "404, NOT FOUND")
    } else {
      sendRes(res, 501, "text/plain", error)
    }
  }
}