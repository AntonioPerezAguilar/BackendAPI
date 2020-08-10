var express = require('express');
var bodyParser = require('body-parser');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const morgan = require('morgan');

var app = express();
app.use(bodyParser.json());
app.use(morgan('tiny'));

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

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

const db = require('./src/config/dbConfig.js');
const user = require('./src/model/user.js');

db.sequelize.sync({force: true}).then(() => {
    console.log('DB Sync... done!');
});

require('./src/route/init.js')(app);
require('./src/route/role.js')(app);
require('./src/route/user.js')(app);

var server = app.listen(3000, () => {

    var host = server.address().address
    var port = server.address().port

    console.log("App started at...", host, port);
})