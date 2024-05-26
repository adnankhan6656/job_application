'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('JobSkills', [
      {
        job_id: 1, 
        skill_id: 2, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        job_id: 1, 
        skill_id: 3, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        job_id: 2, 
        skill_id: 1, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        job_id: 3, 
        skill_id: 2, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        job_id: 3, 
        skill_id: 4, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        job_id: 3, 
        skill_id: 5, 
        createdAt: new Date(),
        updatedAt: new Date()
      }

    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('JobSkills', null, {});
  }
};
