const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3334;

const server = http.createServer((req, res) => {
    // Endpoint to return HTML
    if (req.url === '/') {

        const data = `<h1>Welcome! Today's date is ${new Date()}</h1>`
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);

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
