'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Skills', [
      {
        name: 'JavaScript',
        description: 'Programming language for the web',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'React.js',
        description: 'JavaScript library for building user interfaces',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Node.js',
        description: 'JavaScript runtime environment',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'HTML',
        description: 'Hypertext Markup Language',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'CSS',
        description: 'Cascading Style Sheets',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
      name: 'Vue js',
      description: 'For Building user Interfaces and its follow Component based architucture',
      createdAt: new Date(),
      updatedAt: new Date()
    }
      // Add more skills as needed
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Skills', null, {});
  }
};
