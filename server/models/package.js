'use strict';
module.exports = (sequelize, DataTypes) => {
    const Package = sequelize.define('Package', {
        packageid: {
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        num: DataTypes.INTEGER,
        finishnum: DataTypes.INTEGER,
        serverid: DataTypes.INTEGER,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    }, {
        // tableName: 'packages_memory'
    });
    Package.associate = function (models) {
        // associations can be defined here
        models.Package.hasMany(models.Order, {
            as: 'package',
            foreignKey: 'packageid',
            sourceKey: 'packageid'
        })

    };
    return Package;
};