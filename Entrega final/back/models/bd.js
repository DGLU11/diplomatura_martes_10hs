
require('dotenv').config();
console.log("HOST:", process.env.MYSQL_HOST);
console.log("USER:", process.env.MYSQL_USER);
console.log("PASS:", process.env.MYSQL_PASSWORD);
console.log("DB:", process.env.MYSQL_DB_NAME);

const mysql = require('mysql');
const util = require('util');

const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,  
  database: process.env.MYSQL_DB_NAME,
});

pool.query = util.promisify(pool.query);

module.exports = pool;



