const database = require('../models')

class PedidoController{

    static async listAll(req, res) {
        try{
            const allPedidos = await database.Pedidos.findAll()
            return res.status(200).json(allPedidos)
        } catch(error){
            return res.status(500).json(error.message)
        }   
    }

    static async findPedido(req, res) {
        try{
            const pedido = await database.Pedidos.findByPk(req.params.id)
            return res.status(200).json(pedido)
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async createPedido(req, res) {
        try{
            const pedido = await database.Pedidos.create({
                nome: req.body.nome,
                email: req.body.email,
                fone: req.body.fone,
                endereco: req.body.endereco,
                contato: req.body.contato,
                fone_contato: req.body.fone_contato, 
                observacao: req.body.observacao
            })
            return res.status(200).json(pedido)
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async updatePedido(req, res) {
        try{
            const pedido = await database.Pedidos.update({
                nome: req.body.nome,
                email: req.body.email,
                fone: req.body.fone,
                endereco: req.body.endereco,
                contato: req.body.contato,
                fone_contato: req.body.fone_contato, 
                observacao: req.body.observacao
                },
                {
                where: {
                    id: req.params.id,
                },
            })
            const pedidoAtualizada = await database.Pedidos.findByPk(req.params.id)
            return res.status(200).json(pedidoAtualizada)
            
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async deletePedido(req, res) {
        try{
            const pedido = await database.Pedidos.destroy({
                where: {
                id: req.params.id,
                },
            });
            const allPedidos = await database.Pedidos.findAll()
            return res.status(200).json({mensagem:"Pedido com o id "+ req.params.id +" excluído\n"})
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

}

module.exports = PedidoController