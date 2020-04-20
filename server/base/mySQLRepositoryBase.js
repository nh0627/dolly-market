import mysql from "mysql2/promise"

require("dotenv").config()

class MySQLRepositoryBase {
  constructor(query) {
    this.query = query
    this.pool = mysql.createPool({
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    })
  }

  async executeQuery(query) {

    const connection = await this.pool.getConnection(async (conn) => conn)
    await connection.beginTransaction()

    const [rows] = await connection.query(query)

    await connection.commit()
    connection.release()

    return rows
  }
}

export default MySQLRepositoryBase
