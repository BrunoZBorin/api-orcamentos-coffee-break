const { Router } = require('express')
const PedidoController = require('../controllers/PedidoController.js')
const routes = Router()

routes.get("/pedidos", PedidoController.listAll);
routes.post("/pedidos", PedidoController.createPedido);
routes.get("/pedidos/:id", PedidoController.findPedido);
routes.put("/pedidos/:id", PedidoController.updatePedido);
routes.delete("/pedidos/:id", PedidoController.deletePedido);

module.exports = routes