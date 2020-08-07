module.exports = (app) => {
    const inits = require('../controller/init.js');

    app.get('/api/init/roles', inits.generateRoles);
    app.get('/api/init/users', inits.generateUsers);

}