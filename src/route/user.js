const validate = require('express-joi-validate');
const validation = require('./validation/userValidation.js');

module.exports = (app) => {
    const users = require('../controller/user.js');
    /**
     * @swagger
     * /api/users/{userId}:
     *  get:
     *      tags: 
     *          - Users
     *      description: Obtener un usuario
     *      produces:
     *          - application/json
     *      parameters:
     *          - name: userId
     *            in: path
     *            required: true
     *            type: integer
     *      responses:
     *          200:
     *              description: Succesfull
     */
    app.get('/api/users/:userId', validate(validation.paramId), users.findById);

    app.post('/api/users', validate(validation.create), users.create);

    app.put('/api/users/:userId', validate(validation.update), users.update);

    app.delete('/api/users/:userId', validate(validation.paramId), users.delete);
}