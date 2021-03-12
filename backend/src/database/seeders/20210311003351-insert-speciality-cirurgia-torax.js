'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('specialties', [{
        id: 8,
        description: 'cirurgia de tórax',
        created_at: Sequelize.fn('now'),
        updated_at: Sequelize.fn('now')
      }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('specialties', null, {});
  }
};
