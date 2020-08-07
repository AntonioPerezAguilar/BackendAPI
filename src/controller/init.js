const db = require('../config/dbConfig.js');
const { sequelize } = require('../config/dbConfig.js');

const User = db.user;
const Role = db.role;

exports.generateRoles = (req, res) => {
    return sequelize.transaction((t) => {
        const roleUsuario =  Role.create({
            Description: "Básico",
            Name: "Usuario"
        }, {transaction: t});
        const roleAdmin =  Role.create({
            Description: "VIP",
            Name: "Admin"
        }, {transaction: t});
        const roleBoss = Role.create({
            Description: "Jefe",
            Name: "Boss"
        }, {transaction: t});
        return Promise.all([roleUsuario, roleAdmin, roleBoss])
        .then((roles) => res.status(201).json(roles))
        .catch(error => res.status(500).send(error))
    });
}

exports.generateUsers = (req, res) => {
    return sequelize.transaction((t) => {
        const userAntonio =  User.create({
            Email: "aperezag@everis.com",
            Name: "Antonio",
            Surname: "Pérez",
            SecondSurname: "Aguilar",
            RoleId: 1
        }, {transaction: t});
        const userEnrique =  User.create({
            Email: "eponcema@everis.com",
            Name: "Enrique",
            Surname: "Ponce",
            SecondSurname: "Martínez",
            RoleId: 2
        }, {transaction: t});
        const userAna = User.create({
            Email: "afernandezma@everis.com",
            Name: "Ana",
            Surname: "Fernandez",
            SecondSurname: "Marquez",
            RoleId: 3
        }, {transaction: t});
        return Promise.all([userAntonio, userEnrique, userAna])
        .then((users) => res.status(201).json(users))
        .catch(error => res.status(500).send(error))
    });
}