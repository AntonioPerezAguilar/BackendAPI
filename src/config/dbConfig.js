var env = require('./env.js');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(env.database, env.username, env.password, {
    host: env.host,
    port: env.port,
    dialect: env.dialect,

    pool: {
        max: env.pool.max,
        min: env.pool.min,
        acquire: env.pool.acquire,
        idle: env.pool.idle
    }
});

const db = {};
db.sequelize = sequelize;

db.user = require('../model/user.js')(sequelize);
db.role = require('../model/role.js')(sequelize);

module.exports = db;