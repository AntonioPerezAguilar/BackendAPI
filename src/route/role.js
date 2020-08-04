module.exports = (app) => {
    const roles = require('../controller/role.js');

    app.get('/api/roles/:roleId', roles.findById);

    app.post('/api/roles', roles.create);

    app.put('/api/roles/:roleId', roles.update);

    app.delete('/api/roles/:roleId', roles.delete);
    
}