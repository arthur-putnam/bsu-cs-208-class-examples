/*
* Run using: node --watch index.js
* */
const express = require('express');
const api_v1 = require('./v1_api');
const api_v2 = require('./v2_api');
const app = express();


// Mount the router at '/api/version' path
app.use('/api/v1', api_v1.router);
app.use('/api/v2', api_v2.router);


// Start the Express server - http://localhost:3030/api/v2/users
const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
