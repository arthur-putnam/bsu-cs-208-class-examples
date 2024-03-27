const express = require('express');
const users = require('./constants').users;

const router = express.Router();



router.get('/users/:userId', (req, res) => {

    // Get query parameters from req.query object
    const userId = parseInt(req.params.userId);

    let filteredUsers = users;

    if (userId) {
        filteredUsers = filteredUsers.filter(user => user.id === userId);
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