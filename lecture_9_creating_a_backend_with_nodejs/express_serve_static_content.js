/*
* Run using: node --watch express_serve_static_content.js
* */
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3335;

// Endpoint to return HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Endpoint to return image
app.get('/image', (req, res) => {
    res.sendFile(path.join(__dirname,'..', 'images', 'img1.jpg'));
});

// Endpoint to return JavaScript file
app.get('/script', (req, res) => {
    res.sendFile(path.join(__dirname, 'script.js'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});