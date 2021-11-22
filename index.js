// Required Files
const express = require('express');
const bodyParser = require('body-parser');
const trainDetails = require('./js/user.js');
// Port Number
const port = process.env.PORT || 3000;
const app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});


// form filling for train
app.post('/train', urlencodedParser, function(req, res) {
    // Prepare output in JSON format
    response = {
        trainNumber: req.body.train,
        trainName: trainDetails.getTrainDetails(req.body.train),
        dateOfTravel: req.body.date,
    };
    console.log(response);
    res.end(JSON.stringify(response));
});


app.listen(port,function() {
    console.log(`Listening on port ${port}`)
    });
