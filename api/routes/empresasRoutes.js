const { Router } = require('express')
const EmpresaController = require('../controllers/EmpresaController.js')
const routes = Router()

routes.get("/empresas", EmpresaController.listAll);
routes.post("/empresas", EmpresaController.createEmpresa);
routes.get("/empresas/:id", EmpresaController.findEmpresa);
routes.put("/empresas/:id", EmpresaController.updateEmpresa);
routes.delete("/empresas/:id", EmpresaController.deleteEmpresa);

module.exports = routes