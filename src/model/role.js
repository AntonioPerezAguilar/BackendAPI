const { DataTypes } = require("sequelize");
const User = require("./user.js");

module.exports = (sequelize, Sequelize) => {
    const Role = sequelize.define('role', {
        Id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Description: {
            type: DataTypes.STRING
        },
        Name: {
            type: DataTypes.STRING
        }
    });

    return Role;
}