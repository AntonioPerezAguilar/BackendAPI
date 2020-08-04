module.exports = (app) => {
    const users = require('../controller/user.js');

    app.get('/api/users/:userId', users.findById);

    app.post('/api/users', users.create);

    app.put('/api/users/:userId', users.update);

    app.delete('/api/users/:userId', users.delete);
}