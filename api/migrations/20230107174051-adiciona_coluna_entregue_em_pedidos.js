'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'Pedidos', 
      'entregue', 
      { 
        type: Sequelize.BOOLEAN,
        defaultValue:false
      });
  },

  async down (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn('Pedidos', 'entregue')
    ]);
  }
};
