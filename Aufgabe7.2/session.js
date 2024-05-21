const express = require('express');
const app = express();
const port = 3000;
const session = require("express-session");
app.use(express.json());

app.use(session({
    secret: 'supersecret',
    resave: false,
    saveUninitialized: false,
    cookie:{}
}))

app.post('/:name', (request, response) => {
    request.session.name = request.params.name;
    response.sendStatus(200);
});

app.get('/name', (request, response) => {
    response.send(request.session.name);
});

app.delete('/name', (request, response) => {
    request.session.name = null;
    response.sendStatus(200);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});