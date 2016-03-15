/*SERVER */

var express = require('express');
var app = express();

//uncomment when running locally
 // var passport = require('./strategies/authorization');
//uncomment when running on herokuapp
// var passport = require('./strategies/facebook');

var passport = require('passport');
var session = require('express-session');
var morgan = require('morgan');

var index = require('./routes/index.js');
var speeches = require('./routes/speeches');
var mailinglist = require('./routes/mailinglist');

//debug
app.use(morgan('dev'));

//Mount body parser middleware
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({expanded: true}));

app.use(express.static(__dirname + 'server/public'));

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

//added in public instead of '/'
//not sure that's solving the crash on herokuapp
app.use('/', index);

// set node to listen on a port
app.set("port", (process.env.PORT || 5000));
app.listen(app.get("port"), function(){
    console.log("Listening on port: " + app.get("port"));
});

module.exports = app;
