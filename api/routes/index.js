const bodyParser = require("body-parser")
const empresas = require('./empresasRoutes.js')
const orcamentos = require('./orcamentosRoutes.js')
const itens = require('./itensRoutes.js')
const pedidos = require('./pedidosRoutes.js')
const produtos = require('./produtosRoutes.js')

module.exports = app => {
    app.use(bodyParser.json())
    app.use(empresas)
    app.use(orcamentos)
    app.use(itens)
    app.use(pedidos)
    app.use(produtos)
}
