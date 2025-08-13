// imports
import fs from "node:fs/promises"
import path from "node:path"

export const serveStatic = async (req, absolutepath) => {
  // get public path
  const publicPath = path.join(absolutepath, "public")
  const filepath = req.url == "/" ? "index.html" : req.url

  // read file path
  const fileToRead = path.join(publicPath, filepath)

  // read content from file
  const content = await fs.readFile(fileToRead, "utf-8")
  
  return content
}