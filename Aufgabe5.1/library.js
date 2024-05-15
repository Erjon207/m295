const express = require('express');
const app = express();
const port = 3000;

let books = [
    {
        "isbn": "978-3-551-31058-3",
        "title": "Diebe im Olymp / Percy Jackson",
        "author": "Rick Riordan",
        "year": 2011
    },
    {
        "isbn": "978-3551528433",
        "title": "Der goldene Kompass",
        "author": "Philip Pullman",
        "year": 1995
    }
]

app.get('/books', (request, response) => {
    response.send(books);
});

app.get('/books/:isbn', (request, response) => {
    response.send(books.findIndex[(book) => book.isbn === request.params.isbn]);
});

app.use(express.json());

app.post('/books', (request, response) => {
    if (request.body.isbn && request.body.title && request.body.author && request.body.year) {
        books.push(request.body);
        response.send(request.body);
    } else response.sendStatus(422)
});

app.put("/books/:isbn", (request, result) => {
    if (request.body.isbn && request.body.title && request.body.author && request.body.year) {
        books = books.map((book) => book.isbn === request.params.isbn ? request.body : book)
        result.send(request.body)
    } else response.sendStatus(422)
});

app.delete('/books/:isbn', (request, response) => {
    books.splice(books.findIndex((book) => book.isbn === request.params.isbn), 1);
    response.send(books);
});

app.patch("/books/:isbn", (request, result) => {
    let i = books.findIndex((book) => book.isbn === request.params.isbn);

    if (request.query.value) {
        if (request.query.category === "title") {
            books[i].title = request.query.value
        } else if (request.query.category === "author") {
            books[i].author = request.query.value
        } else if (request.query.category === "year") {
            books[i].year = request.query.value
        }
    
        result.send(books[i])
    } else response.sendStatus(422)
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});