const express = require('express');
const app = express();
const port = 3000;
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');

app.use('/swagger-ui', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

let lends = [
    {
        "id" : 1, 
        "customer_id" : 1,
        "isbn" : 1, 
        "borrowed_at" : "20.3.2024",
        "returned_at" : null
    },
    {
        "id" : 2, 
        "customer_id" : 1,
        "isbn" : 2, 
        "borrowed_at" : "1.4.2024",
        "returned_at" : null 
    }
]

let i = lends.length + 1
let currentdate = new Date();


app.get('/lends', (request, response) => {
    response.send(lends);
});
 
app.get('/lends/:id', (request, response) => {
    response.send(lends[lends.findIndex((lend) => lend.id == request.params.id)])
});

app.use(express.json());

app.post('/lends', (request, response) => {
    if (request.body.customer_id && -1 == lends.findIndex((lend) => lend.isbn == request.body.isbn)) {
        request.body.borrowed_at = currentdate.getDay() + "." + currentdate.getMonth() + "." + currentdate.getFullYear()
        request.body.id = i
        i++
        lends.push(request.body);
        response.send(request.body);
    } else response.sendStatus(422)
});

app.delete('/lends/:id', (request, response) => {
    let i = lends.findIndex((lend) => lend.id == request.params.id)
    lends[i].returned_at = currentdate.getDay() + "." + currentdate.getMonth() + "." + currentdate.getFullYear()
    response.send(lends)    
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});