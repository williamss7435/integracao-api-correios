'use strict';
const {DataTypes} = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('adresses', { 
       id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
       },
       cep: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
      },
      street : {
        type: DataTypes.STRING,
        allowNull: false,
      },
      district: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      state: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      city  : {
        type: DataTypes.STRING,
        allowNull: false,
      },
      complement: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
          allowNull: false,
          type: Sequelize.DATE
      }
      });
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('adresses');
  }
};
