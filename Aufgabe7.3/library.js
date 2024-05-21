const express = require('express');
const app = express();
const port = 3000;
const session = require("express-session");
const authRoutes = require('./auth');

app.use(express.json());

app.use(session({
    secret: 'supersecret',
    resave: false,
    saveUninitialized: false,
    cookie: {}
}));

app.use('/auth', authRoutes);

let lends = [
    {
        "id": 1,
        "customer_id": 1,
        "isbn": 1,
        "borrowed_at": "20.3.2024",
        "returned_at": null
    },
    {
        "id": 2,
        "customer_id": 1,
        "isbn": 2,
        "borrowed_at": "1.4.2024",
        "returned_at": null
    }
];

let i = lends.length + 1;
let currentdate = new Date();

app.get('/lends', (request, response) => {
    if (request.session.authetificated == true) {
        response.send(lends);
    } else {
        response.sendStatus(401);
    }
});

app.get('/lends/:id', (request, response) => {
    if (request.session.authetificated == true) {
        response.send(lends.find(lend => lend.id == request.params.id));
    } else {
        response.sendStatus(401);
    }
});

app.post('/lends', (request, response) => {
    if (request.body.customer_id && -1 == lends.findIndex((lend) => lend.isbn == request.body.isbn)) {
        request.body.borrowed_at = currentdate.getDate() + "." + (currentdate.getMonth() + 1) + "." + currentdate.getFullYear();
        request.body.id = i;
        i++;
        lends.push(request.body);
        response.send(request.body);
    } else {
        response.sendStatus(400);
    }
});

app.delete('/lends/:id', (request, response) => {
    let index = lends.findIndex((lend) => lend.id == request.params.id);
    if (index !== -1) {
        lends[index].returned_at = currentdate.getDate() + "." + (currentdate.getMonth() + 1) + "." + currentdate.getFullYear();
        response.send(lends);
    } else {
        response.sendStatus(404);
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});