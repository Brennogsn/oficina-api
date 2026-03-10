const pool = require("../database/database")

exports.listarClientes = async (req, res) => {

  const resultado = await pool.query("SELECT * FROM clientes")

  res.json(resultado.rows)

}

exports.buscarCliente = async (req, res) => {

  const id = req.params.id

  const resultado = await pool.query(
    "SELECT * FROM clientes WHERE id = $1",
    [id]
  )

  if (resultado.rows.length === 0) {
    return res.status(404).json({ erro: "Cliente não encontrado" })
  }

  res.json(resultado.rows[0])

}

exports.criarCliente = async (req, res) => {

  const { nome, carro } = req.body

  const resultado = await pool.query(
    "INSERT INTO clientes (nome, carro) VALUES ($1, $2) RETURNING *",
    [nome, carro]
  )

  res.json(resultado.rows[0])

}

exports.atualizarCliente = async (req, res) => {

  const id = req.params.id
  const { nome, carro } = req.body

  const resultado = await pool.query(
    "UPDATE clientes SET nome = $1, carro = $2 WHERE id = $3 RETURNING *",
    [nome, carro, id]
  )

  if (resultado.rows.length === 0) {
    return res.status(404).json({ erro: "Cliente não encontrado" })
  }

  res.json(resultado.rows[0])

}

exports.deletarCliente = async (req, res) => {

  const id = req.params.id

  const resultado = await pool.query(
    "DELETE FROM clientes WHERE id = $1 RETURNING *",
    [id]
  )

  if (resultado.rows.length === 0) {
    return res.status(404).json({ erro: "Cliente não encontrado" })
  }

  res.json({ mensagem: "Cliente removido com sucesso" })

}