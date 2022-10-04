const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'fast123',
    database: 'testdb'
});

module.exports = db;