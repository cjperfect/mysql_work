'use strict';
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        name: DataTypes.STRING(100),
        phone: DataTypes.STRING(20),
        type: DataTypes.TINYINT,
        level: DataTypes.TINYINT,
        pid: DataTypes.INTEGER,
        path: DataTypes.STRING,
    }, {
        timestamps: false,
        // tableName: 'users_memory'
    });
    User.associate = function (models) {
        // associations can be defined here
        models.User.hasMany(models.User, {
            as: 'childs',
            foreignKey: 'pid',
            sourceKey: 'id'
        })

        models.User.hasMany(models.Order, {
            as: 'user',
            foreignKey: 'kfid',
            sourceKey: 'id'
        })

    };
    return User;
};