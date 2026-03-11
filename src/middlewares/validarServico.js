function validarServico(req, res, next) {

 const { carro_id, descricao, preco } = req.body

 if (!carro_id) {
  return res.status(400).json({
   erro: "carro_id é obrigatório"
  })
 }

 if (!descricao) {
  return res.status(400).json({
   erro: "descricao é obrigatória"
  })
 }

 if (!preco) {
  return res.status(400).json({
   erro: "preco é obrigatório"
  })
 }

 next()

}

module.exports = validarServico