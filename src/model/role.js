const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
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