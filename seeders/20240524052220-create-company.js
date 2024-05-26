'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
 
    await queryInterface.bulkInsert('Companies', [
      {
        name: 'ABC Technologies',
        description: 'Leading technology company',
        location:'Ahmedabad',
        website: 'https://www.abc.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'XYZ Corporation',
        description: 'Global corporation',
        website: 'https://www.xyzcorp.com',
        location:'Ahmedabad',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'Esparkbiz Corporation',
        description: 'Where Affordability meets ..',
        website: 'https://www.xyzcorp.com',
        location:'Ahmedabad',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
   
  
      await queryInterface.bulkDelete('Companies', null, {});
  
  }
};
