'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('doctor_specialties', { 
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
     },
     doctor_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'doctors',
        key: 'id'
      }
    }, 
    specialty_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'specialties',
        key: 'id'
      }
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
     await queryInterface.dropTable('doctor_specialties');
  }
};
