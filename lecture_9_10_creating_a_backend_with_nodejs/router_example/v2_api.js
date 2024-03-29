const express = require('express');
const users = require('./constants').users;

const router = express.Router();



router.get('/users', (req, res) => {

    const payload = {
        data: users,
        meta: {
            offset: 0,
            limit: 10,
            size: users.length
        }
    }


    res.json(payload);
});

module.exports.router = router;