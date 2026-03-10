const pool = require("./database/database")

async function testar() {
  const res = await pool.query("SELECT NOW()")
  console.log(res.rows)
}

testar()