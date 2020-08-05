const Joi = require('@hapi/joi');

exports.paramId = {
    params: {
        userId: Joi.number().required()
    }
}

exports.create = {
    body: {
        Email: Joi.string().required(),
        Name: Joi.string().required(),
        Surname: Joi.string().required(),
        SecondSurname: Joi.string().required(),
        RoleId: Joi.number().optional()
    }
}

exports.update = {
    params: {
        userId: Joi.number().required()
    },
    body: {
        Email: Joi.string().optional(),
        Name: Joi.string().optional(),
        Surname: Joi.string().optional(),
        SecondSurname: Joi.string().optional(),
        RoleId: Joi.number().optional()
    }
}