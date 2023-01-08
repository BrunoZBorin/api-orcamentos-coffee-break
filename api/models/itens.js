'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Itens extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Itens.belongsTo(models.Pedidos,{
        foreignKey:'pedido_id'
      })
      Itens.belongsTo(models.Orcamentos,{
        foreignKey:'orcamento_id'
      })
      Itens.belongsTo(models.Produtos,{
        foreignKey:'produto_id'
      })
    }
  }
  Itens.init({
    preco: DataTypes.DECIMAL,
    unidade: DataTypes.STRING,
    quantidade: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Itens',
  });
  return Itens;
};