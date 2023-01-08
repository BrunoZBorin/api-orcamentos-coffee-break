'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pedidos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Pedidos.belongsTo(models.Empresas,{
        foreignKey:'empresa_id'
      })
      Pedidos.hasMany(models.Itens,{
        foreignKey:'pedido_id'
      })
    }
  }
  Pedidos.init({
    data_hora: DataTypes.DATE,
    local: DataTypes.STRING,
    observacao: DataTypes.STRING,
    tipo: DataTypes.STRING,
    responsavel: DataTypes.STRING,
    setor: DataTypes.STRING,
    entregue: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Pedidos',
  });
  return Pedidos;
};