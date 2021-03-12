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

        let orders = [];
        for (let i = 100001; i <= 200001; i++) {
            let goodsname = '商品' + i;
            let price = Random.integer(50, 3000);
            let orderstatus = 2;
            let createdAt = new Date();
            let updatedAt = new Date();
            orders.push({
                id: i,
                goodsname,
                price,
                orderstatus,
                createdAt,
                updatedAt
            })
        }

        return queryInterface.bulkInsert('orders_memory', orders);

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