module.exports = (app) => {
    const inits = require('../controller/init.js');

    /**
     * @swagger
     * /api/init/roles:
     *  get:
     *      tags: 
     *          - Inits
     *      description: Set initial de roles
     *      produces:
     *          - application/json
     *      responses:
     *          200:
     *              description: Succesfull
     */
    app.get('/api/init/roles', inits.generateRoles);
    /**
     * @swagger
     * /api/init/users:
     *  get:
     *      tags: 
     *          - Inits
     *      description: Set initial de users
     *      produces:
     *          - application/json
     *      responses:
     *          200:
     *              description: Succesfull
     */
    app.get('/api/init/users', inits.generateUsers);

}