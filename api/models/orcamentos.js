'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orcamentos extends Model {
  
    static associate(models) {
      Orcamentos.belongsTo(models.Empresas,{
        foreignKey:'empresa_id'
      })
      Orcamentos.hasMany(models.Itens,{
        foreignKey:'orcamento_id'
      })
    }
  }
  Orcamentos.init({
    data_inicio: DataTypes.DATEONLY,
    data_final: DataTypes.DATEONLY,
    local: DataTypes.STRING,
    observacao: DataTypes.STRING,
    tipo: DataTypes.STRING,
    responsavel: DataTypes.STRING,
    desconto: DataTypes.DECIMAL,
    taxa_de_entrega: DataTypes.DECIMAL,
    total_bruto: DataTypes.DECIMAL,
    total_liquido: DataTypes.DECIMAL,
    aprovado: DataTypes.BOOLEAN,

  }, {
    sequelize,
    modelName: 'Orcamentos',
  });
  return Orcamentos;
};