'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Empresas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Empresas.hasMany(models.Pedidos,{
        foreignKey:'empresa_id'
      })
      Empresas.hasMany(models.Orcamentos,{
        foreignKey:'empresa_id'
      })
    }
  }
  Empresas.init({
    nome: DataTypes.STRING,
    fone: DataTypes.STRING,
    email: DataTypes.STRING,
    endereco: DataTypes.STRING,
    contato: DataTypes.STRING,
    fone_contato: DataTypes.STRING,
    observacao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Empresas',
  });
  return Empresas;
};