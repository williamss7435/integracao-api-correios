'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('specialties', [{
       id: 2,
       description: 'angiologia',
       created_at: Sequelize.fn('now'),
       updated_at: Sequelize.fn('now')
      }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('specialties', null, {});
  }
};
