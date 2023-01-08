const { Router } = require('express')
const ProdutoController = require('../controllers/ProdutoController.js')
const routes = Router()

routes.get("/produtos", ProdutoController.listAll);
routes.post("/produtos", ProdutoController.createProduto);
routes.get("/produtos/:id", ProdutoController.findProduto);
routes.put("/produtos/:id", ProdutoController.updateProduto);
routes.delete("/produtos/:id", ProdutoController.deleteProduto);

module.exports = routes