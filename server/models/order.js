'use strict';
module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
        goodsname: DataTypes.STRING,
        price: DataTypes.DECIMAL(10, 2),
        orderstatus: DataTypes.TINYINT,
        packageid: DataTypes.INTEGER,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    }, {
        // tableName: 'orders_memory'
    });
    Order.associate = function (models) {
        // associations can be defined here
        models.Order.belongsTo(models.User, {
            as: 'user',
            foreignKey: 'kfid',
            targetKey: 'id'
        })
        
        models.Order.belongsTo(models.Package, {
            as: 'package',
            foreignKey: 'packageid',
            targetKey: 'packageid'
        })
    };
    return Order;
};