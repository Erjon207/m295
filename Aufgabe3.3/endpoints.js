const express = require('express');
const { Redirect } = require('request/lib/redirect');
const app = express();
const port = 3000;

app.get('/now', (request, response) => {
    var currentdate = new Date();
    var datetime = currentdate.getDay() + "/"
        + currentdate.getMonth()
        + "/" + currentdate.getFullYear() + " @ "
        + currentdate.getHours() + ":"
        + currentdate.getMinutes() + ":"
        + currentdate.getSeconds();

    response.send(datetime.toString());
});

app.get('/zli', (request, response) => {
    response.redirect('https://www.zli.ch/');
});

app.get('/name', (request, response) => {
    const names = [
        "Alice",
        "Bob",
        "Charlie",
        "David",
        "Emma",
        "Frank",
        "Grace",
        "Henry",
        "Ivy",
        "Jack",
        "Kate",
        "Liam",
        "Mia",
        "Noah",
        "Olivia",
        "Peter",
        "Quinn",
        "Rachel",
        "Sam",
        "Taylor"
      ]
    response.send(names[Math. floor(Math. random() * (names.length - 0 + 1)) + 0]);
});

app.get('/html', (request, response) => {
    response.sendFile('/index.html', {root: __dirname });
});

app.get('/image', (request, response) => {
    response.sendFile('/images.png', {root: __dirname });
});

app.get('/teapot', (request, response) => {
    response.sendStatus(418)
});

app.get('/user-agent', (request, response) => {
    response.send(request.headers['user-agent']);
});

app.get('/secret', (request, response) => {
    response.sendStatus(403)
});

app.get('/xml', (request, response) => {
    response.sendFile('/file.xml', {root: __dirname });
});

app.get('/me', (request, response) => {
    const json = {
        "vorname":"erjon",
        "nachname":"thaqi",
        "alter":"17",
        "wohnort":"uster",
        "augenfarbe":"braun"
    }

    response.send(json);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});