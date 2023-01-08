const database = require('../models')

class OrcamentoController{

    static async listAll(req, res) {
        try{
            const allOrcamentos = await database.Orcamentos.findAll()
            return res.status(200).json(allOrcamentos)
        } catch(error){
            return res.status(500).json(error.message)
        }   
    }

    static async findOrcamento(req, res) {
        try{
            const orcamento = await database.Orcamentos.findByPk(req.params.id)
            return res.status(200).json(orcamento)
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async createOrcamento(req, res) {
        console.log(req)
        try{
            const orcamento = await database.Orcamentos.create({
                data_inicio:req.body.data_inicio,
                data_final:req.body.data_final,
                local:req.body.local,
                empresa_id:req.body.empresa_id,
                observacao:req.body.observacao,
                tipo:req.body.tipo,
                responsavel:req.body.responsavel,
                desconto:req.body.desconto,
                taxa_de_entrega:req.body.taxa_de_entrega, 
                total_bruto:req.body.total_bruto,
                total_liquido:req.body.total_liquido,
                aprovado:req.body.aprovado
            })
            return res.status(200).json(orcamento)
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async updateOrcamento(req, res) {
        try{
            const orcamento = await database.Orcamentos.update({
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
            const orcamentoAtualizada = await database.Orcamentos.findByPk(req.params.id)
            return res.status(200).json(orcamentoAtualizada)
            
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async deleteOrcamento(req, res) {
        try{
            const orcamento = await database.Orcamentos.destroy({
                where: {
                id: req.params.id,
                },
            });
            const allOrcamentos = await database.Orcamentos.findAll()
            return res.status(200).json({mensagem:"Pessoa com o id "+ req.params.id +" excluído\n"})
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

}

module.exports = OrcamentoController