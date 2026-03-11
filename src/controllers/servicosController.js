const pool = require("../database/database")

// buscar serviços de um cliente
exports.buscarServicosCliente = async (req, res) => {

 try {

  const clienteId = req.params.id

  const resultado = await pool.query(
   `
   SELECT 
   clientes.nome AS cliente,
   carros.modelo,
   servicos.descricao,
   servicos.preco
   FROM servicos
   JOIN carros ON servicos.carro_id = carros.id
   JOIN clientes ON carros.cliente_id = clientes.id
   WHERE clientes.id = $1
   `,
   [clienteId]
  )

  res.json(resultado.rows)

 } catch (erro) {

  console.error(erro)
  res.status(500).json({ erro: "Erro ao buscar serviços do cliente" })

 }

}

// buscar serviços de um carro
exports.buscarServicosCarro = async (req, res) => {

 try {

  const carroId = req.params.id

  const resultado = await pool.query(
   `
   SELECT 
   carros.modelo,
   servicos.descricao,
   servicos.preco
   FROM servicos
   JOIN carros ON servicos.carro_id = carros.id
   WHERE carros.id = $1
   `,
   [carroId]
  )

  res.json(resultado.rows)

 } catch (erro) {

  console.error(erro)
  res.status(500).json({ erro: "Erro ao buscar serviços do carro" })

 }

}

// criar serviço
exports.criarServico = async (req, res) => {

 try {

  const { carro_id, descricao, preco } = req.body

  const resultado = await pool.query(
   "INSERT INTO servicos (carro_id, descricao, preco) VALUES ($1,$2,$3) RETURNING *",
   [carro_id, descricao, preco]
  )

  res.json(resultado.rows[0])

 } catch (erro) {

  console.error(erro)
  res.status(500).json({ erro: "Erro ao criar serviço" })

 }

}

// deletar serviço
exports.deletarServico = async (req, res) => {

 try {

  const id = req.params.id

  await pool.query(
   "DELETE FROM servicos WHERE id = $1",
   [id]
  )

  res.json({ mensagem: "Serviço deletado com sucesso" })

 } catch (erro) {

  console.error(erro)
  res.status(500).json({ erro: "Erro ao deletar serviço" })

 }

}