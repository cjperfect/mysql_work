'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   let packages = [];
   for (let i = 100001; i <= 200001; i++) {
       let createdAt = new Date();
       let updatedAt = new Date();
       packages.push({
           packageid: i,
           createdAt,
           updatedAt
       })
   }

   return queryInterface.bulkInsert('packages_memory', packages);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
