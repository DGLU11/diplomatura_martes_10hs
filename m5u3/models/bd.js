var mysql = require('mysql2');  
var util = require('util');    

var pool = mysql.createPool({
    connectionLimit: 10,  
    host: 'localhost',           
    user: 'root',           
    password: '',  
    database: 'ejercicio'
   
});

pool.query = util.promisify(pool.query);

module.exports = pool;