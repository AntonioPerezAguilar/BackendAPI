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
     *      summary: Obtener un usuario
     *      produces:
     *          - application/json
     *      parameters:
     *          - name: userId
     *            in: path
     *            required: true
     *            type: integer
     *      responses:
     *          200:
     *              description: Ok
     */
    app.get('/api/users/:userId', validate(validation.paramId), users.findById);

    /**
     * @swagger
     * /api/users:
     *  post:
     *      tags: 
     *          - Users
     *      summary: Crear un usuario
     *      consumes:
     *          - application/json
     *      parameters:
     *          - in: body
     *            name: User
     *            schema: 
     *              type: object
     *              required:
     *                  - Name
     *                  - Surname
     *                  - SeconSurname
     *                  - Email
     *      responses:
     *          201:
     *              description: Created
     */
    app.post('/api/users', validate(validation.create), users.create);

    /**
     * @swagger
     * /api/users/{userId}:
     *  put:
     *      tags: 
     *          - Users
     *      summary: Modificar un usuario
     *      consumes:
     *          - application/json
     *      parameters:
     *          - name: userId
     *            in: path
     *            required: true
     *            type: integer
     *          - in: body
     *            name: User
     *            schema: 
     *              type: object
     *              required:
     *                  - Name
     *                  - Surname
     *                  - SeconSurname
     *                  - Email
     *      responses:
     *          200:
     *              description: Ok
     */
    app.put('/api/users/:userId', validate(validation.update), users.update);

    /**
     * @swagger
     * /api/users/{userId}:
     *  delete:
     *      tags: 
     *          - Users
     *      summary: Eliminar un usuario
     *      produces:
     *          - application/json
     *      parameters:
     *          - name: userId
     *            in: path
     *            required: true
     *            type: integer
     *      responses:
     *          200:
     *              description: Ok
     */
    app.delete('/api/users/:userId', validate(validation.paramId), users.delete);
}