'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orcamentos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      data_inicio: {
        type: Sequelize.DATEONLY
      },
      data_final: {
        type: Sequelize.DATEONLY
      },
      local: {
        type: Sequelize.STRING
      },
      observacao: {
        type: Sequelize.STRING
      },
      tipo: {
        type: Sequelize.STRING
      },
      responsavel: {
        type: Sequelize.STRING
      },
      desconto: {
        type: Sequelize.DECIMAL
      },
      taxa_de_entrega: {
        type: Sequelize.DECIMAL
      },
      total_bruto: {
        type: Sequelize.DECIMAL
      },
      total_liquido: {
        type: Sequelize.DECIMAL
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Orcamentos');
  }
};