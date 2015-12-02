/*SERVER */

var express = require('express');
var app = express();

var index = require('./routes/index.js');
var speeches = require('./routes/speeches');

var cloudinary = require('cloudinary');


//Mount body parser middleware
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({expanded: true}));

// mount router middleware
app.use('/speeches', speeches);
app.use('/', index);

// set node to listen on a port
app.set("port", (process.env.PORT || 5000));
app.listen(app.get("port"), function(){
    console.log("Listening on port: " + app.get("port"));
});

module.exports = app;