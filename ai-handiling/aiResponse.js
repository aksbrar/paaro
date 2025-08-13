// imports
import { sendRes } from "../utils/sendRes.js"

export const getAiRes = (res, body) => {
  sendRes(res, 200, "application/json", JSON.stringify(body))
}