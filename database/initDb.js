import { PGlite } from "@electric-sql/pglite"

export const intiDb = async () => {
  const db = new PGlite("idb://my-pgdata");

  await db.query(
    `CREATE TABLE IF NOT EXISTS messages (
      role VARCHAR(9) NOT NULL,
      message TEXT NOT NULL,
      timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`  
  )

  return db
}