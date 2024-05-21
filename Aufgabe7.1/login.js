const express = require('express');
const app = express();
const port = 3000;

const auth = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        res.setHeader('WWW-Authenticate', 'Basic');
        return res.sendStatus(401);
    }

    const base64Credentials = authHeader.split(' ')[1];
    //const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
    const credentials = atob(base64Credentials);
    const [username, password] = credentials.split(':');

    const validUsername = 'zli';
    const validPassword = 'zli1234';

    if (username === validUsername && password === validPassword) {
        return next();
    } else {
        res.setHeader('WWW-Authenticate', 'Basic');
        return res.status(401).send('Invalid credentials.');
    }
};

app.get('/public', (request, response) => {
    response.sendFile('/public.html', { root: __dirname });
});

app.get('/private', auth, (request, response) => {
    response.sendFile('/private.html', { root: __dirname });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});