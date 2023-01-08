'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Pedidos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      data_hora: {
        type: Sequelize.DATE
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
      setor: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Pedidos');
  }
};