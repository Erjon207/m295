const express = require('express');
const app = express();
const port = 3000;

let names = [
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

let me = {
    "vorname" : "Erjon",
    "nachname" : "Thaqi",
    "alter" : 17
}   

app.get('/now', (request, response) => {
    var currentdate = new Date();
    response.send(currentdate.toLocaleString('de-CH', { timeZone: request.query.tz }))
});

app.get('/name', (request, response) => {
    response.send(names)
});

app.post('/name', (request, response) => {
    names.push(request.query.name);
    response.send(names);
});

app.delete('/name', (request, response) => {
    names = names.filter(v => v !== request.query.name);
    response.send(names);
});

app.get('/chuck', (request, response) => {

    if (request.query.name != null) {
        fetch("https://api.chucknorris.io/jokes/random")
            .then((response) => response.json())
            .then((json) => response.send(json.value.toString().replace("Chuck Norris", request.query.name)));
    }

    fetch("https://api.chucknorris.io/jokes/random")
        .then((response) => response.json())
        .then((json) => response.send(json.value.toString()));
});

app.use(express.json());

app.get('/me', (request, response) => {
    response.send(me)
});

app.patch('/me', (request, response) => {
    me = request.body
    response.send(me)
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});