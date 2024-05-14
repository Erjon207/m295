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
    },
    {
        "isbn": "978-0439358071",
        "title": "Harry Potter and the Philosopher's Stone",
        "author": "J.K. Rowling",
        "year": 1997
    },
    {
        "isbn": "978-0140283330",
        "title": "The Hobbit",
        "author": "J.R.R. Tolkien",
        "year": 1937
    },
    {
        "isbn": "978-0345339706",
        "title": "The Hitchhiker's Guide to the Galaxy",
        "author": "Douglas Adams",
        "year": 1979
    }
]

app.get('/books', (request, response) => {
    response.send(books);
});

app.get('/books/:isbn', (request, response) => {
    function getByIsbn(value, index, array) {
        return value.isbn == request.params.isbn
    }

    response.send(books.find(getByIsbn));
});

app.use(express.json());

app.post('/books', (request, response) => {
    books.push(request.body);
    response.send(request.body);
});

app.put('/books/:isbn', (request, response) => {
    books = books.map((book) => { 
        if (book.isbn === request.params.isbn) { 
            book = request.body 
        } 
    })
    response.send(request.body);
});

app.delete('/books', (request, response) => {


    response.send(books);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});