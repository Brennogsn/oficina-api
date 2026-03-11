const express = require("express");
const router = express.Router();

const servicosController = require("../controllers/servicosController");
const validarServico = require("../middlewares/validarServico");

// criar serviço
router.post("/", validarServico, servicosController.criarServico);

// buscar serviços de um cliente
router.get("/cliente/:id", servicosController.buscarServicosCliente);

// buscar serviços de um carro
router.get("/carro/:id", servicosController.buscarServicosCarro);

// deletar serviço
router.delete("/:id", servicosController.deletarServico);

module.exports = router;