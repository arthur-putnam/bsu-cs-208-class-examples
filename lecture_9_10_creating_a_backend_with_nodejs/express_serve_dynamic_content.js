/*
* Run using: node --watch express_serve_dynamic_content.js
* */
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3336;

// Endpoint to return HTML
app.get('/', (req, res) => {
    const data = `<h1>Express: Today's date is ${new Date()}</h1>`
    res.status(200).send(data)
});


app.get('/users', (req, res) => {
    const users = [
        {
            "id": 1,
            "username": "john_doe",
            "email": "john@example.com",
            "age": 30
        },
        {
            "id": 2,
            "username": "jane_smith",
            "email": "jane@example.com",
            "age": 25
        },
        {
            "id": 3,
            "username": "bob_jackson",
            "email": "bob@example.com",
            "age": 35
        }
    ]

    res.json(users)
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});