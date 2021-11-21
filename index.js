// Required Files
const express = require('express');
// Port Number
const port = process.env.PORT || 3000;
const app = express();

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(port,function() {
    console.log(`Listening on port ${port}`)
    });
