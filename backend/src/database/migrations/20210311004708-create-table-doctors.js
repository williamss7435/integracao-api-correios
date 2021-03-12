'use strict';
const {DataTypes} = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('doctors', { 
       id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
       },
       name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      crm: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      cell_phone: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      adress_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'adresses',
          key: 'id'
        }
      },
      deleted_at: {
        allowNull: true,
        type: DataTypes.DATE,
        defaultValue: null
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
     await queryInterface.dropTable('doctors');
  }
};
