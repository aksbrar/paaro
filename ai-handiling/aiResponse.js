// imports
import { sendRes } from "../utils/sendRes.js"
import OpenAI from "openai"
import 'dotenv/config'
// other way
// import {dotenv} from "dotenv"
// dotenv.config()
import utils from "../database/dbUtil.js"

// api key
const key = process.env.OPENAI_KEY

// initiate ai
const myAI = new OpenAI({
  "apiKey" : key
})

export const getAiRes = async (res, body, db) => {
  try {
    // retreive previous message, will push user question later if everything works fine till here!
    let retrievedOnes = await utils.getMessages(db)
    console.log(retrievedOnes)

    const response = await myAI.chat.completions.create({
      model : "gpt-5-nano",
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

    // save into database
    const messagesToSave = [
      {
        role: 'user',
        content: body.question
      },
      {
        role: 'assistant',
        content: response.choices[0].message.content
      }
    ];
    utils.saveMessage(db, messagesToSave)
    

    // send response
    const aiAnswer = response.choices[0].message.content
    sendRes(res, 200, "application/json", JSON.stringify({answer:aiAnswer}))
  } 
  catch ( error ) {
    console.log(error)
    sendRes(res, 501, "plain/text", JSON.stringify("ai response error!"))
  }
}