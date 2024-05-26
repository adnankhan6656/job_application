'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Applications', [
      {
        status:'pending',
         user_id:1,
         job_id:3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        status:'pending',
         user_id:2,
         job_id:3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        status:'pending',
         user_id:3,
         job_id:3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        status:'pending',
         user_id:4,
         job_id:3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        status:'pending',
         user_id:4,
         job_id:5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Applications', null, {});
  }
};
