const validate = require('express-joi-validate');
const validation = require('./validation/roleValidation.js');

module.exports = (app) => {
    const roles = require('../controller/role.js');

    /**
     * @swagger
     * /api/roles/{roleId}:
     *  get:
     *      tags: 
     *          - Roles
     *      summary: Obtener un rol
     *      produces:
     *          - application/json
     *      parameters:
     *          - name: roleId
     *            in: path
     *            required: true
     *            type: integer
     *      responses:
     *          200:
     *              description: Ok
     */
    app.get('/api/roles/:roleId', validate(validation.paramId), roles.findById);

    /**
     * @swagger
     * /api/roles:
     *  post:
     *      tags: 
     *          - Roles
     *      summary: Crear un rol
     *      consumes:
     *          - application/json
     *      parameters:
     *          - in: body
     *            name: Role
     *            schema: 
     *              type: object
     *              required:
     *                  - Name
     *                  - Description
     *      responses:
     *          201:
     *              description: Created
     */
    app.post('/api/roles', validate(validation.create), roles.create);


    /**
     * @swagger
     * /api/roles/{roleId}:
     *  put:
     *      tags: 
     *          - Roles
     *      summary: Modificar un rol
     *      consumes:
     *          - application/json
     *      parameters:
     *          - name: roleId
     *            in: path
     *            required: true
     *            type: integer
     *          - in: body
     *            name: Role
     *            schema: 
     *              type: object
     *              required:
     *                  - Name
     *                  - Description
     *      responses:
     *          200:
     *              description: Ok
     */
    app.put('/api/roles/:roleId', validate(validation.update), roles.update);

    /**
     * @swagger
     * /api/roles/{roleId}:
     *  delete:
     *      tags: 
     *          - Roles
     *      summary: Eliminar un rol
     *      produces:
     *          - application/json
     *      parameters:
     *          - name: roleId
     *            in: path
     *            required: true
     *            type: integer
     *      responses:
     *          200:
     *              description: Ok
     */
    app.delete('/api/roles/:roleId', validate(validation.paramId), roles.delete);
    
}