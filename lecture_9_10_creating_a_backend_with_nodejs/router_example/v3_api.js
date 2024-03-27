const express = require('express');
const users = require('./constants').users;

const router = express.Router();



router.get('/users', (req, res) => {

    // Get query parameters from req.query object
    const age = parseInt(req.query.age);

    let filteredUsers = users;

    if (age) {
        filteredUsers = filteredUsers.filter(user => user.age === age);
    }

    const payload = {
        data: filteredUsers,
        meta: {
            offset: 0,
            limit: 10,
            size: filteredUsers.length
        }
    }

    res.json(payload);
});

module.exports.router = router;