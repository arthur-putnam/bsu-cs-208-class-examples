const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3333;

const server = http.createServer((req, res) => {
    // Endpoint to return HTML
    if (req.url === '/') {
        const htmlPath = path.join(__dirname, 'index.html');
        fs.readFile(htmlPath, (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end('Internal Server Error');
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    }

    // Endpoint to return image
    else if (req.url === '/image') {
        const imagePath = path.join(__dirname, '..', 'images', 'img1.jpg');
        fs.readFile(imagePath, (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end('Internal Server Error');
                return;
            }
            res.writeHead(200, { 'Content-Type': 'image/jpeg' });
            res.end(data);
        });
    }

    // Endpoint to return JavaScript file
    else if (req.url === '/script') {
        const jsPath = path.join(__dirname, 'script.js');
        fs.readFile(jsPath, (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end('Internal Server Error');
                return;
            }
            res.writeHead(200, { 'Content-Type': 'application/javascript' });
            res.end(data);
        });
    }

    // Handle invalid endpoints
    else {
        res.writeHead(404);
        res.end('Not Found');
    }
});

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
