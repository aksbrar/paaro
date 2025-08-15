const getMessages = async (db) => {
  const messages = await db.query(
    `SELECT * FROM messages 
     ORDER BY timestamp
     ASC`
  ) 

  return messages.rows
}


const saveMessage = async (db, msgs) => {
  for (const msg of msgs) {
    await db.query(
      `INSERT INTO messages (role, content)
      VALUES ($1, $2)`, [msg.role, msg.content]
    )
  }
}

export default {saveMessage, getMessages}