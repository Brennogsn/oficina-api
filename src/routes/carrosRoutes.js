const express = require("express")
const router = express.Router()

const carrosController = require("../controllers/carrosController")

router.get("/carros", carrosController.listarCarros)
router.get("/carros/:id", carrosController.buscarCarro)
router.post("/carros", carrosController.criarCarro)
router.delete("/carros/:id", carrosController.deletarCarro)

module.exports = router