'use strict';
const Mock = require('mockjs');
const Random = Mock.Random;

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
        let users = [];
        for (let i = 100001; i <= 200001; i++) {
            let type = Random.integer(1, 2);
            let name = type == 2 ? Random.cname() : Random.province() + '服务商' + Random.integer(1, 99999);
            let level = type == 1 ? Random.integer(1, 2) : 0; // type==1就是服务商 0: 客服
            let phone = '15927202962';
            users.push({
                id: i,
                name,
                phone,
                type,
                level
            })
        }

        return queryInterface.bulkInsert('users_memory', users);
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