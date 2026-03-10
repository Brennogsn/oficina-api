const pool = require("../database/database")

exports.listarCarros = async (req, res) => {

  const resultado = await pool.query("SELECT * FROM carros")

  res.json(resultado.rows)

}

exports.criarCarro = async (req, res) => {

  const { cliente_id, modelo, placa } = req.body

  const resultado = await pool.query(
    "INSERT INTO carros (cliente_id, modelo, placa) VALUES ($1,$2,$3) RETURNING *",
    [cliente_id, modelo, placa]
  )

  res.json(resultado.rows[0])

}

exports.buscarCarro = async (req, res) => {

  const id = req.params.id

  const resultado = await pool.query(
    "SELECT * FROM carros WHERE id = $1",
    [id]
  )

  if (resultado.rows.length === 0) {
    return res.status(404).json({ erro: "Carro não encontrado" })
  }

  res.json(resultado.rows[0])

}

exports.deletarCarro = async (req, res) => {

  const id = req.params.id

  await pool.query(
    "DELETE FROM carros WHERE id = $1",
    [id]
  )

  res.json({ mensagem: "Carro removido" })

}

exports.criarCarro = async (req, res) => {

  const { cliente_id, modelo, placa } = req.body

  const resultado = await pool.query(
    "INSERT INTO carros (cliente_id, modelo, placa) VALUES ($1,$2,$3) RETURNING *",
    [cliente_id, modelo, placa]
  )

  res.json(resultado.rows[0])

}

exports.deletarCarro = async (req, res) => {

  const id = req.params.id

  const resultado = await pool.query(
    "DELETE FROM carros WHERE id = $1 RETURNING *",
    [id]
  )

  if (resultado.rows.length === 0) {
    return res.status(404).json({ erro: "Carro não encontrado" })
  }

  res.json({ mensagem: "Carro removido" })

}