const db = require('../config/dbConfig.js');

const User = db.user;

exports.findById = (req, res) => {
    User.findByPk(req.params.userId)
        .then(user => {
            res.status(200).json(user)
    }).catch(error => res.status(500).send(error))
};

exports.create = (req, res) => {
    User.create({
        Email: req.body.Email,
        Name: req.body.Name,
        Surname: req.body.Surname,
        SecondSurname: req.body.SecondSurname,
        RoleId: req.body.RoleId
    }).then(user => {
        res.status(200).json(user);
    }).catch(error => res.status(500).send(error))
};

exports.update = (req, res) => {
    return User.findByPk(req.params.userId)
        .then(
            user => user.update({
                Email: req.body.Email,
                Name: req.body.Name,
                Surname: req.body.Surname,
                SecondSurname: req.body.SecondSurname,
                RoleId: req.body.RoleId
            }).then(() => res.status(200).json(user))
                .catch(error => res.status(400).send(error))
        ).catch(error => res.status(500).send(error))
};

exports.delete = (req, res) => {
    return User.findByPk(req.params.userId)
        .then(user => user.destroy()
            .then(() => res.status(200).json('Entity deleted!'))
        ).catch(error => res.status(500).send(error))
};