'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('enderecos',
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        userId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'users',
            key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        },
        zipCode: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        street: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        numberHome: {
          type: Sequelize.STRING,
        },
        city: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        country: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
      });
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('enderecos');

  }
};
