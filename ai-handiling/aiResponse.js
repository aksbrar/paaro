// imports
import { sendRes } from "../utils/sendRes.js"
import OpenAI from "openai"
import 'dotenv/config'
// other way
// import {dotenv} from "dotenv"
// dotenv.config()

// api key
const key = process.env.OPENAI_KEY

// initiate ai
const myAI = new OpenAI({
  "apiKey" : key
})

// To-do
// setup database, and exhange messages to keep history

export const getAiRes = async (res, body) => {
  try {
    const response = await myAI.chat.completions.create({
      model : "gpt-5",
      messages : [
        {
          role : "assistant",
          content : "You are just a random, nice guy sending kind replies"
        },
        {
          role : 'user',
          content : body.question
        }
      ]
    })

    const aiAnswer = response.choices[0].message.content
    sendRes(res, 200, "application/json", JSON.stringify(aiAnswer))
  } 
  catch ( error ) {
    console.log(error)
    sendRes(res, 501, "plain/text", JSON.stringify("ai response error!"))
  }
}