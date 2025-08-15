import { PGlite } from "@electric-sql/pglite"

export const intiDb = async () => {
  const db = new PGlite("idb://my-pgdata");

  await db.query(
    `CREATE TABLE IF NOT EXISTS messages (
      message TEXT NOT NULL
    )`  
  )

  return db
}