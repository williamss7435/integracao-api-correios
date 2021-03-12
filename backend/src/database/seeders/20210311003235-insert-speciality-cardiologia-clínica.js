'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('specialties', [{
        id: 4,
        description: 'cardiologia clínica',
        created_at: Sequelize.fn('now'),
        updated_at: Sequelize.fn('now')
      }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('specialties', null, {});
  }
};
