var express = require('express');
var app = express();

var index = require('./routes/index.js');

var sendData = require('./routes/sendData');

var bodyParser = require('body-parser');


app.set("port", (process.env.PORT || 5000));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({expanded: true}));


app.use('/data', sendData);

app.use('/', index);

app.listen(app.get("port"), function(){
    console.log("Listening on port: " + app.get("port"));
});

module.exports = app;