const request = require('request');

const express = require('express');
const app = express();
const port = 3000;

app.get('/:plz', (request, res) => {
    let plz = request.params.plz
    function getWeather1() {
        fetch(`https://app-prod-ws.meteoswiss-app.ch/v1/plzDetail?plz=${plz}00`)
            .then(response => response.json())
            .then(data => {
                res.send(data.currentWeather.temperature.toString());
            })
            .catch(error => console.error('Error:', error));
    }
    getWeather1();
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});