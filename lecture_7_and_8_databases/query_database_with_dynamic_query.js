const mysql = require('mysql2');
const readline = require('readline');

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

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question(`What is the user_id?`, user_id => {
    console.log(`Looking up ${user_id}!`);


    const sql = `SELECT * FROM users WHERE user_id = ${user_id};`
    console.log(sql)

    connection.query(sql, (err, rows, fields) => {
        if (err) throw err

        for(row of rows){
            console.log(rows)
        }
        connection.close();
    });

    rl.close();
});
