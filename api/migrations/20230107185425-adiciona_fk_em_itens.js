'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'Itens', 
      'pedido_id', 
      { 
        allowNull:true,
        type: Sequelize.INTEGER,
        references:{model:"Pedidos", key:"id"}
      }
    )
  },

  async down (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn('Itens', 'pedido_id')
    ]);
  }
};
