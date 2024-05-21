const express = require('express');
const router = express.Router();

router.post('/login', (request, response) => {
    request.session.username = request.body.username;
    request.session.password = request.body.password;

    request.session.authetificated = true;
    response.sendStatus(200);
});

router.get('/verify', (request, response) => {
    response.send(request.session);
});

router.delete('/logout', (request, response) => {
    request.session.username = null;
    request.session.password = null;
    request.session.authetificated = null;
    response.sendStatus(204);
});

module.exports = router;