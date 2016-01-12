/*SERVER */

var express = require('express');
var app = express();

var passport = require('./strategies/facebook');
var session = require('express-session');

var index = require('./routes/index.js');
var speeches = require('./routes/speeches');
var mailinglist = require('./routes/mailinglist');

//Mount body parser middleware
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({expanded: true}));

// mount router middleware
app.use('/speeches', speeches);

app.use('/mailinglist', mailinglist);


app.use(session({
    secret: 'secret',
    key: 'user',
    resave: 'true',
    saveUninitialized: false,
    cookie: {maxage: 600000, secure: false}
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/', index);

// set node to listen on a port
app.set("port", (process.env.PORT || 5000));
app.listen(app.get("port"), function(){
    console.log("Listening on port: " + app.get("port"));
});

module.exports = app;