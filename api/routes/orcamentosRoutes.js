const { Router } = require('express')
const OrcamentoController = require('../controllers/OrcamentoController.js')
const routes = Router()

routes.get("/orcamentos", OrcamentoController.listAll);
routes.post("/orcamentos", OrcamentoController.createOrcamento);
routes.get("/orcamentos/:id", OrcamentoController.findOrcamento);
routes.put("/orcamentos/:id", OrcamentoController.updateOrcamento);
routes.delete("/orcamentos/:id", OrcamentoController.deleteOrcamento);

module.exports = routes