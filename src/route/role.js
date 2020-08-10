module.exports = (app) => {
    const roles = require('../controller/role.js');

    /**
     * @swagger
     * /api/roles/{roleId}:
     *  get:
     *      tags: 
     *          - Roles
     *      description: Obtener un rol
     *      produces:
     *          - application/json
     *      parameters:
     *          - name: roleId
     *            in: path
     *            required: true
     *            type: integer
     *      responses:
     *          200:
     *              description: Succesfull
     */
    app.get('/api/roles/:roleId', roles.findById);

    app.post('/api/roles', roles.create);

    app.put('/api/roles/:roleId', roles.update);

    /**
     * @swagger
     * /api/roles/{roleId}:
     *  delete:
     *      tags: 
     *          - Roles
     *      description: Eliminar un rol
     *      produces:
     *          - application/json
     *      parameters:
     *          - name: roleId
     *            in: path
     *            required: true
     *            type: integer
     *      responses:
     *          200:
     *              description: Succesfull
     */
    app.delete('/api/roles/:roleId', roles.delete);
    
}