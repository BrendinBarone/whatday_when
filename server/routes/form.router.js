var express = require('express');
var router = express.Router();
var path = require('path');
var pool = require('../modules/pool.js');
var encryptLib = require('../modules/encryption');
var pg = require('pg');

//adding database to server
var config = {
  database: 'whatday_when_db', // name of your database
  host: 'localhost', // where is your database?
  port: 5432, // port for the database
  max: 10, // how many connections at one time?
  idleTimeoutMillis: 30000 // 30 second time out
};

var pool = new pg.Pool(config);
// Using a router drops the part of the url used to get here
// http://localhost:5000/books/ would '/'
router.post('/', function(req, res) {
  var taskForm = req.data;
  console.log(taskForm);
  // errorConnecting is bool, db is what we query against,
  // done is a function that we call when we're done
  pool.connect(function(errorConnectingToDatabase, db, done) {
    if (errorConnectingToDatabase) {
      console.log('Error connecting to the database.');
      res.sendStatus(500);
    } else {
      // We connected to the database!!!
      // Now we're going to POST things to the db
      var queryText = 'INSERT INTO "tasks" ("taskname", "date", "time", "notes", "user_id", "completed")' +
        'VALUES ($1, $2, $3, $4, $5, false)';

      // errorMakingQuery is a bool, result is an object
      db.query(queryText, [taskForm.taskname, taskForm.date taskForm.time, taskForm.notes, taskForm.user_id], function(errorMakingQuery, result) {
        done();
        if (errorMakingQuery) {
          console.log('Attempted to query with', queryText);
          console.log('Error making query');
          res.sendStatus(500);
        } else {
          res.sendStatus(200);
        }
      }); // end query
    } // end if
  }); // end pool
}); // end of POST




module.exports = router;
