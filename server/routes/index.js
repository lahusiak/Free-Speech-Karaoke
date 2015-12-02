var express = require('express');
var router = express.Router();
var path = require('path');

var passport = require('../strategies/facebook');

//FACEBOOK ROUTES===============

//route for facebook authentication and login

router.get('/auth/facebook', passport.authenticate('facebook', {scope: 'email'}));

//handle the callback after facebook has authenticated the user

router.get('/auth/facebook/callback',
passport.authenticate('facebook', {
    successRedirect : '/',
    failureRedirect: '/login'
}));

// route for logging out

router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/login');
});

// route middleware to make sure a sure is logged in

function isLoggedIn(req, res, next) {
    //if user is authenticated in session, carry on

    if (req.isAuthenticated())
    return next();

    //if they aren't redirect them to the login page
    res.redirect ('login');

}

router.get('/login', function (req, res, next){
    var file = req.params[0] || 'assets/views/login.html';
    res.sendFile(path.join(__dirname, "../public/", file));
});


//catch all
router.get('/*', function(req, res, next){
    var file = req.params[0] || 'assets/views/index.html';
    res.sendFile(path.join(__dirname, "../public/", file));
});

module.exports = router;