const database = require('../models')

class EmpresaController{

    static async listAll(req, res) {
        try{
            const allEmpresas = await database.Empresas.findAll()
            return res.status(200).json(allEmpresas)
        } catch(error){
            return res.status(500).json(error.message)
        }   
    }

    static async findEmpresa(req, res) {
        try{
            const empresa = await database.Empresas.findByPk(req.params.id)
            return res.status(200).json(empresa)
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async createEmpresa(req, res) {
        try{
            const empresa = await database.Empresas.create({
                nome: req.body.nome,
                email: req.body.email,
                fone: req.body.fone,
                endereco: req.body.endereco,
                contato: req.body.contato,
                fone_contato: req.body.fone_contato, 
                observacao: req.body.observacao
            })
            return res.status(200).json(empresa)
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async updateEmpresa(req, res) {
        try{
            const empresa = await database.Empresas.update({
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
            const empresaAtualizada = await database.Empresas.findByPk(req.params.id)
            return res.status(200).json(empresaAtualizada)
            
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    
    

    static async deleteEmpresa(req, res) {
        try{
            const empresa = await database.Empresas.destroy({
                where: {
                id: req.params.id,
                },
            });
            const allEmpresas = await database.Empresas.findAll()
            return res.status(200).json({mensagem:"Pessoa com o id "+ req.params.id +" excluído\n"})
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

}

module.exports = EmpresaController