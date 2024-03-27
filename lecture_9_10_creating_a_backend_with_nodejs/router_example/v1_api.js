const express = require('express');
const users = require('./constants');

const router = express.Router();



router.get('/users', (req, res) => {
    res.json(users);
});

module.exports.router = router;