var express = require("express");
var router = express.Router();
var pg = require('pg');
 pg.default.ssl = true;

var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/speech_library';

// Posts client data to mailingList table in speech_library DB

router.post("/mailinglist", function(req, res) {

    var addFan = {
        "firstname": req.body.firstname,
        "lastname": req.body.lastname,
        "email": req.body.email,
        "message": req.body.message
    };

    pg.connect(connectionString, function (err, client, done) {

        client.query("INSERT INTO mailing_list (firstname, lastname, email, message)\
            VALUES ($1, $2, $3, $4) RETURNING mailing_list",
            [addFan.firstname, addFan.lastname, addFan.email, addFan.message],
            function(err, result){
                if(err) {
                    console.log("Error inserting data: ", err);
                    res.send(false);
                }
                res.send(true);
            });


        //// Stream results back one row at a time
        //query.on('row', function (row) {
        //    results.push(row);
        //});
        //
        //// After all data is returned, close connection and return results
        //query.on('end', function () {
        //    client.end();
        //    return res.json(results);
        //});

        // Handle Errors
        //if (err) {
        //    console.log(err);
        //}
    });
});

module.exports = router;
