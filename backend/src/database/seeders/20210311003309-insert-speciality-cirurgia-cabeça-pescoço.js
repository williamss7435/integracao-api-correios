'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('specialties', [{
        id: 6,
        description: 'cirurgia cabeça e pescoço',
        created_at: Sequelize.fn('now'),
        updated_at: Sequelize.fn('now')
      }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('specialties', null, {});
  }
};
