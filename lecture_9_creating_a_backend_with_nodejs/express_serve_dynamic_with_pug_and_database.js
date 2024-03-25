/*
* Run using: node --watch express_serve_dynamic_with_pug_and_database.js
* */
const express = require('express');
const mysql = require('mysql2');

const app = express();
const PORT = 3338;

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

app.use(express.static("public"));

// Set the view engine to use Pug
app.set('view engine', 'pug');


// Endpoint to return HTML
app.get('/', (req, res) => {

    connection.query('SELECT * FROM users LIMIT 10;', (err, rows, fields) => {
        if (err) throw err

        for(row of rows){
            console.log(rows)
        }
        const data = {
            title: 'Listing Users from Database',
            date: new Date(),
            users: rows
        };
        res.render('list_users', data);
    });
});



app.get('/users', (req, res) => {

    connection.query('SELECT * FROM users LIMIT 10;', (err, rows, fields) => {
        if (err) throw err

        for(row of rows){
            console.log(rows)
        }
        res.json(rows)

    });
});





app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});