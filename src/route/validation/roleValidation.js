const Joi = require('@hapi/joi');

exports.paramId = {
    params: {
        roleId: Joi.number().required()
    }
}

exports.create = {
    body: {
        Description: Joi.string().required(),
        Name: Joi.string().required()
    }
}

exports.update = {
    params: {
        roleId: Joi.number().required()
    },
    body: {
        Description: Joi.string().optional(),
        Name: Joi.string().optional()
    }
}