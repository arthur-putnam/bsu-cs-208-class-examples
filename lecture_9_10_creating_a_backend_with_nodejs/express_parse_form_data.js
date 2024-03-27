/*
* Run using: node --watch express_serve_dynamic_content.js
* */
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3339;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Endpoint to return HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'form.html'))
});


app.post('/new_user', (req, res) => {
    const { name, email } = req.body;

    // Process the data
    console.log(req.body)
    console.log('Name:', name);
    console.log('Email:', email);

    // Send a response
    res.send(`Created new user! Name: ${name} Email: ${email}`);
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});