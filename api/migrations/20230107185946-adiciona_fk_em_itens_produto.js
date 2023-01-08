'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'Itens', 
      'produto_id', 
      { 
        allowNull:true,
        type: Sequelize.INTEGER,
        references:{model:"Produtos", key:"id"}
      }
    )
  },

  async down (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn('Itens', 'produto_id')
    ]);
  }
};
