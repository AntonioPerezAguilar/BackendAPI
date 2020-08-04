const { DataTypes } = require("sequelize");
const Role = require("./role.js");

module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('user', {
        Id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Email: {
            type: DataTypes.STRING
        },
        Name: {
            type: DataTypes.STRING
        },
        Surname: {
            type: DataTypes.STRING
        },
        SecondSurname: {
            type: DataTypes.STRING
        },
        RoleId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'roles',
                key: 'Id',
            }
        }
    });

    return User;
}