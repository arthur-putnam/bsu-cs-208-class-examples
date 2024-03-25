/*
* Run using: node --watch express_serve_dynamic_content.js
* */
const express = require('express');

const app = express();
const PORT = 3337;

app.use(express.static("public"));

// Set the view engine to use Pug
app.set('view engine', 'pug');

// Set the directory for Pug templates
// app.set('views', path.join(__dirname, 'views'));


// Endpoint to return HTML
app.get('/', (req, res) => {
    const data = {
        title: 'Welcome from express + pug!',
        date: new Date()
    };
    res.render('index', data);
});





app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});