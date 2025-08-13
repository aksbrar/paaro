export const sendRes = (res, statusCode, contentType, content) => {
  // set things
  res.statusCode = statusCode
  res.setHeader("Content-Type", contentType);
  // send data
  res.end(content)
}