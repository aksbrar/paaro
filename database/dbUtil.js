const getMessages = async (db) => {
  const messages = await db.query(
    `SELECT * FROM messages 
     ORDER BY timestamp
     DESC`
  ) 

  return messages
}


const saveMessage = async (db, role, message) => {
  await db.query(
    `INSERT INTO messages (role, message)
     VALUES ($1, $2)`, [role, message]
  )
}

export default {saveMessage, getMessages}