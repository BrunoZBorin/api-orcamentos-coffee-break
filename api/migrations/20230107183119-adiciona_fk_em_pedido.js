'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'Pedidos', 
      'empresa_id', 
      { 
        allowNull:false,
        type: Sequelize.INTEGER,
        references:{model:"Empresas", key:"id"}
      }
    )
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeColumn('Pedidos', 'empresa_id')
  }
};
