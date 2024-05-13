const request = require('request');
const url = 'https://app-prod-ws.meteoswiss-app.ch/v1/plzDetail?plz='
let postalcode = '861000';

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (request, res) => {
    function getWeather1() {
        fetch(url + postalcode)
            .then(response => response.json())
            .then(data => {
                res.send(data.currentWeather);
            })
            .catch(error => console.error('Error:', error));
    }
    getWeather1();
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});