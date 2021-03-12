'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('specialties', { 
       id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
       },
       description: {
        type: Sequelize.STRING(120),
        allowNull: false,
        unique: true
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
     await queryInterface.dropTable('specialties');
  }
};
