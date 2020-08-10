const swaggerJsDoc = require('swagger-jsdoc');

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'API Backend',
            description: '',
            contact: {
                name: 'Antonio'
            },
            servers: ['http://localhost:3000']
        }
    },
    apis: ["./src/route/*.js"]
};
var swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = swaggerDocs;