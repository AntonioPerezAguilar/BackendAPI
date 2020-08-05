const db = require('../config/dbConfig.js');

const Role = db.role;

exports.findById = (req, res) => {
    Role.findByPk(req.params.roleId).then(role => {
        res.status(200).json(role)
    }).catch(error => res.status(500).send(error))
}

exports.create = (req, res) => {
    Role.create({
        Description: req.body.Description,
        Name: req.body.Name
    }).then(role => {
        res.json(role);
    }).catch(error => res.status(500).send(error))
};

exports.update = (req, res) => {
    return Role.findByPk(req.params.roleId)
        .then(
            role => role.update({
                Description: req.body.Description,
                Name: req.body.Name
            }).then(() => res.status(200).json(role))
                .catch(error => res.status(400).send(error))
        ).catch(error => res.status(500).send(error))
};

exports.delete = (req, res) => {
    return Role.findByPk(req.params.roleId)
        .then(role => role.destroy()
            .then(() => res.status(200).json('Entity deleted!'))
        ).catch(error => res.status(500).send(error))
};