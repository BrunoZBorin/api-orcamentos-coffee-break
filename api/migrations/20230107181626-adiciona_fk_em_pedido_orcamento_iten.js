'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(
        'Orcamentos', 
        'empresa_id', 
        { 
          allowNull:false,
          type: Sequelize.INTEGER,
          references:{model:"Empresas", key:"id"}
        }
      )
  },

  async down (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn('Orcamentos', 'empresa_id')
    ]);
  }
};
