'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'Itens', 
      'orcamento_id', 
      { 
        allowNull:true,
        type: Sequelize.INTEGER,
        references:{model:"Orcamentos", key:"id"}
      }
    )
  },

  async down (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn('Itens', 'orcamento_id')
    ]);
  }
};
