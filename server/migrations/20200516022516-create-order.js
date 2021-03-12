'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('orders', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			goodsname: {
				type: Sequelize.STRING(100)
			},
			price: {
				type: Sequelize.DECIMAL(10, 2)
			},
			orderstatus: {
				type: Sequelize.TINYINT,
				comment: '1：正常订单， 2：异常订单'
			},
			packageid: {
				type: Sequelize.INTEGER
			},
			kfid: {
				type: Sequelize.INTEGER
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			}
		}).then(() => {
			return queryInterface.addConstraint('orders', ['kfid'], {
				type: 'foreign key',
				name: 'order-usres-constraint',
				references: {
					table: 'users',
					field: 'id'
				}
			})
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('Orders');
	}
};