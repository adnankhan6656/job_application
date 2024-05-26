'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Jobs', [
      {
        title: 'Software Engineer',
        description: 'Full-stack web developer',
        company_id: 6, // ID of ABC Technologies
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Vue js Developer',
        description: 'Full-stack web developer',
        company_id: 6, // ID of ABC Technologies
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'laravel Developer',
        description: 'Applicants have Good knowledge About laravel',
        company_id: 6, // ID of ABC Technologies
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Dot NET Developer',
        description: 'Applicants have Good knowledge About Dot Net',
        company_id: 7, // ID of ABC Technologies
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Android Developer',
        description: 'Applicants have Good knowledge About Java',
        company_id: 8, // ID of ABC Technologies
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Add more jobs as needed
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Jobs', null, {});
  }
};
