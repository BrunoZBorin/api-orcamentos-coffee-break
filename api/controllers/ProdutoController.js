const database = require('../models')

class ProdutoController{

    static async listAll(req, res) {
        try{
            const allProdutos = await database.Produtos.findAll()
            return res.status(200).json(allProdutos)
        } catch(error){
            return res.status(500).json(error.message)
        }   
    }

    static async findProduto(req, res) {
        try{
            const produto = await database.Produtos.findByPk(req.params.id)
            return res.status(200).json(produto)
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async createProduto(req, res) {
        try{
            const produto = await database.Produtos.create({
                nome: req.body.nome,
                email: req.body.email,
                fone: req.body.fone,
                endereco: req.body.endereco,
                contato: req.body.contato,
                fone_contato: req.body.fone_contato, 
                observacao: req.body.observacao
            })
            return res.status(200).json(produto)
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async updateProduto(req, res) {
        try{
            const produto = await database.Produtos.update({
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
            const produtoAtualizada = await database.Produtos.findByPk(req.params.id)
            return res.status(200).json(produtoAtualizada)
            
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async deleteProduto(req, res) {
        try{
            const produto = await database.Produtos.destroy({
                where: {
                id: req.params.id,
                },
            });
            const allProdutos = await database.Produtos.findAll()
            return res.status(200).json({mensagem:"Pessoa com o id "+ req.params.id +" excluído\n"})
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

}

module.exports = ProdutoController