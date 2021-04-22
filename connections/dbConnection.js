const mysql = require('promise-mysql');

const dbConfig = {
    user: 'root',
    password: 'root',
    database: 'proj_db',
    host: 'localhost',
    connectionLimit: 10,
    port: 3306
}

module.exports = async() => {
    try {
        let pool;
        let connection;
        if (pool) connection = pool.getConnection();
        else {
            pool = await mysql.createPool(dbConfig);
            connection = pool.getConnection();
        }
        return connection;

    } catch (e) {
        throw e;
    }
}