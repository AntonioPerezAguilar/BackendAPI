module.exports = (app) => {
    const inits = require('../controller/init.js');

    /**
     * @swagger
     * /api/init:
     *  get:
     *      tags: 
     *          - Inits
     *      description: Set initial en BBDD
     *      produces:
     *          - application/json
     *      responses:
     *          200:
     *              description: Succesfull
     */
    app.get('/api/init', inits.generateInit);

}