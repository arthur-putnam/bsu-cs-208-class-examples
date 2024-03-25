const mysql = require('mysql2');


// Database connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'msandbox',
    password: 'teach123',
    database: 'examples',
    port: 51512,
    insecureAuth : true
})
connection.connect();

connection.query('SELECT * FROM users LIMIT 10;', (err, rows, fields) => {
    if (err){
        connection.close();
        throw err;
    }

    for(row of rows){
        console.log(rows)
    }
    connection.close();
});





