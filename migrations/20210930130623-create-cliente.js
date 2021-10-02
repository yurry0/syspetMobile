'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Clientes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cli_nome: {
        type: Sequelize.STRING
      },
      cidade: {
        type: Sequelize.STRING
      },
      cli_rg: {
        type: Sequelize.STRING
      },
      cli_estado: {
        type: Sequelize.STRING
      },
      cli_cep: {
        type: Sequelize.STRING
      },
      cli_endereco: {
        type: Sequelize.STRING
      },
      cli_bairro: {
        type: Sequelize.STRING
      },
      cli_email: {
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Clientes');
  }
};