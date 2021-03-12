'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('users', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			name: {
				type: Sequelize.STRING(100)
			},
			phone: {
				type: Sequelize.STRING(20)
			},
			type: {
				type: Sequelize.TINYINT,
				comment: '1: 服务商， 2： 客服'
			},
			level: {
				type: Sequelize.TINYINT,
				comment: '服务商级别，客服为null'
			},
			pid: {
				type: Sequelize.INTEGER
			},
			path: {
				type: Sequelize.STRING(100)
			}

		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('Users');
	}
};