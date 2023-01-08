const { Router } = require('express')
const ItenController = require('../controllers/ItenController.js')
const routes = Router()

routes.get("/itens", ItenController.listAll);
routes.post("/itens", ItenController.createIten);
routes.get("/itens/:id", ItenController.findIten);
routes.put("/itens/:id", ItenController.updateIten);
routes.delete("/itens/:id", ItenController.deleteIten);

module.exports = routes