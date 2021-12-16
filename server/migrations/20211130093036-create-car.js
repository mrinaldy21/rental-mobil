'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cars', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      harga_sewa: {
        type: Sequelize.INTEGER
      },
      penumpang: {
        type: Sequelize.INTEGER(3)
      },
      bagasi: {
        type: Sequelize.BOOLEAN
      },
      pintu: {
        type: Sequelize.INTEGER(2)
      },
      ac: {
        type: Sequelize.BOOLEAN
      },
      type: {
        type: Sequelize.STRING(15)
      },
      deskripsi: {
        type: Sequelize.STRING(100)
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
    await queryInterface.dropTable('cars');
  }
};