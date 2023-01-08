const database = require('../models')

class ItenController{

    static async listAll(req, res) {
        try{
            const allItens = await database.Itens.findAll()
            return res.status(200).json(allItens)
        } catch(error){
            return res.status(500).json(error.message)
        }   
    }

    static async findIten(req, res) {
        try{
            const item = await database.Itens.findByPk(req.params.id)
            return res.status(200).json(item)
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async createIten(req, res) {
        try{
            const item = await database.Itens.create({
                nome: req.body.nome,
                email: req.body.email,
                fone: req.body.fone,
                endereco: req.body.endereco,
                contato: req.body.contato,
                fone_contato: req.body.fone_contato, 
                observacao: req.body.observacao
            })
            return res.status(200).json(item)
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async updateIten(req, res) {
        try{
            const item = await database.Itens.update({
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
            const itemAtualizada = await database.Itens.findByPk(req.params.id)
            return res.status(200).json(itemAtualizada)
            
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async deleteIten(req, res) {
        try{
            const item = await database.Itens.destroy({
                where: {
                id: req.params.id,
                },
            });
            const allItens = await database.Itens.findAll()
            return res.status(200).json({mensagem:"Pessoa com o id "+ req.params.id +" excluído\n"})
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

}

module.exports = ItenController