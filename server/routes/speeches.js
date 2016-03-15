var express = require("express");
var router = express.Router();
var pg = require('pg');

 // pg.default.ssl = true;

var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/speech_library';

// Returns the entire list of speeches
//Added /speeches instead of "/"
//Attempting to fix crash on herokuapp
router.get("/", function(req, res) {
    var results = [];

    pg.connect(connectionString, function (err, client, done) {
        var query = client.query("SELECT speaker, title, theme, text, era, year FROM speeches ORDER BY speaker ASC");
        // Handle Errors
        if (err){
            console.log(err);
        };
        // Stream results back one row at a time
        query.on('row', function (row) {
            results.push(row);
        });

        // After all data is returned, close connection and return results
        query.on('end', function () {
            client.end();
            return res.json(results);
        });

    });
});

module.exports = router;
