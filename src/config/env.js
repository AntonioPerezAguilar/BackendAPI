const env = {
    database: 'practica',
    username: 'root',
    password: '12345',
    host: 'localhost',
    port: '3306',
    dialect: 'mariadb',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};

module.exports = env;