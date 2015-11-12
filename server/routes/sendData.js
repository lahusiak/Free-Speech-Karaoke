var express = require('express');
var router = express.Router();

var path = require('path');
//var bodyParser = require('body-parser');

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/FSP_mailinglist');
mongoose.model('Person', new Schema({"firstName": String, "lastName": String, "email": String, "comment": String}, {collection: 'fspList'}));
var Person = mongoose.model('Person');


router.route('/')
    .get(function(req, res){
        Person.find({}, function(err, data){
            if(err) console.log("Error:", err);
            res.send(data);
        });

    });

module.exports = router;