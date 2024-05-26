'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'Adnan Khan',
        email: 'adnan160@example.com',
        password: 'password123',
        age:21,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Nabil Khan',
        age:20,
        email: 'nabil160@example.com',
        password: 'nabil@1924',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Salman Khan',
        age:19,
        email: 'salman160@example.com',
        password: 'salman@123',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sharafat Hussain',
        age:25,
        email: 'sharafat123@example.com',
        password: 'sharafat@1924',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Aryan Patel',
        age:29,
        email: 'aryan123@example.com',
        password: 'aryan@1924',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Add more users as needed
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
